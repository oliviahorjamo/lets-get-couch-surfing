import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";
import notificationReducer from "./reducers/notificationReducer";
import friendReducer from "./reducers/friendReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer,
    notification: notificationReducer,
    friends: friendReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
