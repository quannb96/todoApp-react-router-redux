import { configureStore } from "@reduxjs/toolkit";
// import { searchValueReducer } from "../slice-redux/SearchValueSlice";
import { todoReducer } from "../slice-redux/TodoSlice";

export const todoStore = configureStore({
  reducer: {
    todo: todoReducer,
    // searchValue: searchValueReducer,
  },
});
