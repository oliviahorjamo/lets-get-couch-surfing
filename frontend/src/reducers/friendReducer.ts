import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";
import { notify } from "./notificationReducer";
import storageService from "../services/storage";
import networkService from "../services/network"
import { UserOutputAttributes } from "../types/users";

const initialState: Array<UserOutputAttributes> = [];


const networkSlice = createSlice({
  name: "network",
  initialState: initialState,
  reducers: {
    setFriends(state, action) {
      return action.payload;
    },
  },
});

export const initializeFriends = () => {
  return async (dispatch: AppDispatch) => {
    const user = storageService.loadUser()
    if (user) {
      const friends = await networkService.getFriends(user.id);
      dispatch(setFriends(friends));
    }
  };
};

export const { setFriends } = networkSlice.actions;
export default networkSlice.reducer;
