import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filter",
  initialState: {
    filter: "",
  },
  reducers: {
    setStatusFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { setStatusFilter } = slice.actions;
export const selectFilter = (state) => state.filter.filter;
export default slice.reducer;
