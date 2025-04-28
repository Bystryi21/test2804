import { createSlice } from "@reduxjs/toolkit";
import {fetchUsers } from "./operations";

const userSlice = createSlice({
    name: "user",
    initialState: { user: [] ,}, extraReducers: (builder)=> {
        builder.addCase(fetchUsers.fulfilled, (state,action)=>{
state.user= action.payload;
        })
    }
})

export default userSlice.reducer;