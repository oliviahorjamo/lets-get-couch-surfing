import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import storageService from "../services/storage";
import { LoginCredentials, SignUpCredentials } from "../types/login";
import { AppDispatch } from "../store";
import { notify } from "./notificationReducer";

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

export const logUserIn = (credentials: LoginCredentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      console.log("sending control to login service");
      const user = await loginService.login(credentials);
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
      const user = await loginService.signup(credentials);
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
