import { createSlice } from "@reduxjs/toolkit";
import userService from "../services/users";
import { AppDispatch } from "../store";
import { UserOutputAttributes } from "../types/users";

const initialState: Array<UserOutputAttributes> = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsers(state, action) {
      return action.payload;
    },
  },
});

export const initializeUsers = () => {
  return async (dispatch: AppDispatch) => {
    const users = await userService.getAll();
    dispatch(setUsers(users));
  };
};

export const { setUsers } = userSlice.actions;
export default userSlice.reducer;
