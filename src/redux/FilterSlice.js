import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    filter: "all",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { setStatusFilter } = slice.actions;
export default slice.reducer;
