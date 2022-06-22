import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoList: [],
    searchValue: "",
  },
  reducers: {
    updateTodoList: (state, action) => {
      state.todoList = [...action.payload];
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { updateTodoList, setSearchValue } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
