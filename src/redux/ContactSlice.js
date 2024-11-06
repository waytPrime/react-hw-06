import { createSlice } from "@reduxjs/toolkit";
import contactArray from "../data/contact.json";

const slice = createSlice({
  name: "contacts",
  initialState: contactArray,

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
