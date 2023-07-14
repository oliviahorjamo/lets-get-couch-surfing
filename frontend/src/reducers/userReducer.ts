import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/user";
import storageService from "../services/storage";
import { LoginCredentials, SignUpCredentials } from "../types/user";
import { AppDispatch } from "../store";
import { notify } from "./notificationReducer";
import { createErrorMessage } from "../utils";
import { Coordinates } from "../types/coordinates";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setLoggedUser(state, action) {
      return action.payload;
    },
    removeLoggedUser() {
      return null;
    },
  },
});

const getLocationInfoFromNavigator = (): Promise<Coordinates> => {
  return new Promise((resolve, reject) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lon: position.coords.longitude
          }
          resolve(coords)
        },
        () => {
          const coords = {
            lat: null,
            lon: null
          }
          resolve(coords)
        }
        )
    } else {
      reject(new Error("geolocation not supported by browser"))
    }
  })
}

export const updateLocationCoordinates = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const coords = await getLocationInfoFromNavigator()
      console.log('got coords: ', coords, " time to update them!")
      const user = storageService.loadUser()
      if (user) {
        const updatedUser = await userService.updateCoords(user.id, coords)
        if (updatedUser) {
          dispatch(setLoggedUser(updatedUser))
        }
      }
    } catch (e) {
      console.log("something went wrong with getting the coordinates (not supported by browser, for example")
    }
  }
}

export const logUserIn = (credentials: LoginCredentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      console.log("sending control to login service");
      const user = await userService.login(credentials);
      storageService.saveUser(user);
      dispatch(setLoggedUser(user));
    } catch (e) {
      console.log("notifying in user reducer");
      dispatch(
        notify({
          message: "Wrong username or password",
          type: "failure",
        })
      );
    }
  };
};

export const signUpUser = (credentials: SignUpCredentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const user = await userService.signup(credentials);
      storageService.saveUser(user);
      dispatch(setLoggedUser(user));
    } catch (e) {
      dispatch(
        notify({
          message: "Username is already taken",
          type: "failure",
        })
      );
    }
  };
};

export const initUser = () => {
  return async (dispatch: AppDispatch) => {
    const user = storageService.loadUser();
    dispatch(setLoggedUser(user));
  };
};

export const clearUser = () => {
  return async (dispatch: AppDispatch) => {
    storageService.removeUser();
    dispatch(removeLoggedUser());
  };
};

export const { setLoggedUser, removeLoggedUser } = userSlice.actions;
export default userSlice.reducer;
