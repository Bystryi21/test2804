import { createSlice } from "@reduxjs/toolkit";
import { fetchById } from "./operations";

const detailsSlice = createSlice({
  name: "details",
  initialState: { details: {} },
  extraReducers: (builder) => {
    builder.addCase(fetchById.fulfilled, (state, action) => {
      state.details = action.payload;
    });
  },
});

export default detailsSlice.reducer;
