import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./reducers/usersReducer";
import userReducer from "./reducers/userReducer";

const store = configureStore({
  reducer: {
    users: usersReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
