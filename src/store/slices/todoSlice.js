import { createSlice } from "@reduxjs/toolkit";
import { getTodos, getTodosById, postTodos } from "./todoThunk";

const initialState = {
  todos: [],
  loading: false,
  error: "",
  newTodos: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(postTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(postTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(postTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTodosById.fulfilled, (state, action) => {
        state.newTodos = action.payload;
      });
  },
});
