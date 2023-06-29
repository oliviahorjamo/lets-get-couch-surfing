import { createSlice } from "@reduxjs/toolkit";
import { AppDispatch } from "../store";

const initialState = { message: null };

interface messageType {
  message: string;
  type: "success" | "failure";
}

const slice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotification(_state, action) {
      return action.payload;
    },
    clearNotification() {
      return initialState;
    },
  },
});

export const notify = (notification: messageType) => {
  return async (dispatch: AppDispatch) => {
    console.log("notifying with message", notification.message);
    dispatch(setNotification(notification));
    setTimeout(() => {
      dispatch(clearNotification());
    }, 2000);
  };
};

export const { setNotification, clearNotification } = slice.actions;
export default slice.reducer;
