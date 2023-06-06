import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../config/axiosInstance";

export const getTodos = createAsyncThunk(
  "todo/getTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const responce = await axiosInstance.get("todos?_limit=20");

      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postTodos = createAsyncThunk(
  "todo/postTodo",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const responce = await axiosInstance.post("todos", payload.data);

      dispatch(getTodos());

      return responce.data.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getTodosById = createAsyncThunk(
  "todo/getTodosById",
  async (id, { rejectWithValue }) => {
    try {
      const responce = await axiosInstance.get(`todos/${id}`);
      console.log("responce: ", responce);
      return responce.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const putTodosById = createAsyncThunk(
  "todo/putTodosById",
  async (data, { rejectWithValue }) => {
    try {
      const responce = await axiosInstance.put(`todos/${data.id}`, data);
      console.log("responce: ", responce);
      return responce.status;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
