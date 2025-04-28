import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUser", async (thunkAPi)=>{
try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    return data.data;
} catch ( error) {
    return thunkAPi.rejectWithValue(error.message)
}
})

