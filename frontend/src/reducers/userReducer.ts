import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import storageService from "../services/storage";
import { LoginCredentials, SignUpCredentials } from "../types/login";
import { AppDispatch } from "../store";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setLoggedUser(state, action) {
      return action.payload;
    },
    removeLoggedUser(state, action) {
      return null;
    },
  },
});

export const logUserIn = (credentials: LoginCredentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const user = await loginService.login(credentials);
      storageService.saveUser(user);
      dispatch(setLoggedUser(user));
      // here perhaps notification
    } catch (e) {
      // here notifying notification
      console.log("An error happened when logging the user in");
    }
  };
  // Here call the user service for logging the user in
  // Then call the service for setting the user to local storage
};

export const signUpUser = (credentials: SignUpCredentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const user = await loginService.signup(credentials);
      storageService.saveUser(user);
      dispatch(setLoggedUser(user));
    } catch (e) {
      console.log("something went wrong with creating a new user");
      // Here notify the user that something went wrong
      // .e.g if the username is already taken
    }
  };
};

export const initUser = () => {
  return async (dispatch: AppDispatch) => {
    const user = storageService.loadUser();
    dispatch(setLoggedUser(user));
  };
};

export const { setLoggedUser } = userSlice.actions;
export default userSlice.reducer;
