import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../slice-redux/TodoSlice";

export const todoStore = configureStore({
  reducer: { todo: todoReducer },
});
