import { configureStore } from "@reduxjs/toolkit";
import newUserSlice from "./slice/newuserslice";

export const store = configureStore({
  reducer: { newUser: newUserSlice },
});
