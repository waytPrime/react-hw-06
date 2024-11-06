import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "contacts",
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      return;
    },
    deleteContact(state, action) {
      return;
    },
  },
});
export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
