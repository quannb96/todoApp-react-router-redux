import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    updateTodoList: (state, action) => {
      state.todoList = [...action.payload];
    },
  },
});
export const { updateTodoList } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
