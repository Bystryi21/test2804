import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchById = createAsyncThunk(
  "details/fetchByid",
  async (id, thunkAPi) => {
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );

      return data.data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error.message);
    }
  }
);
