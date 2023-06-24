import { createSlice } from "@reduxjs/toolkit";
import loginService from "../services/login";
import storageService from '../services/storage'
import { Credentials } from "../types/login";
import { AppDispatch } from "../store";


const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setLoggedUser(state, action) {
      return action.payload;
    },
    removeLoggedUser(state, action) {
      return null
    }
  },
});

export const logUserIn = (credentials: Credentials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const user = await loginService.login(credentials)
      storageService.saveUser(user)
      dispatch(setLoggedUser(user))
      // here perhaps notification
    } catch (e) {
      // here notifying notification
      console.log('An error happened when logging the user in')
    }
  }
  // Here call the user service for logging the user in
  // Then call the service for setting the user to local storage
}

export const { setLoggedUser } = userSlice.actions;
export default userSlice.reducer;
