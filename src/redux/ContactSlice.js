import { createSelector, createSlice } from "@reduxjs/toolkit";

import { fetchContacts, addContact, deleteContact } from "./ContactsOps";
import { selectFilter } from "./FilterSlice";
import { logoutUser } from "./AuthOps";

const slice = createSlice({
  name: "contacts",
  initialState: { contacts: [], isLoading: false, isError: null },

  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.contacts = [];
      })
      .addCase(logoutUser.rejected, (state) => {
        state.contacts = [];
      });
  },
});

export const selectError = (state) => state.contacts.isError;
export const selectLoading = (state) => state.contacts.isLoading;
export const selectContacts = (state) => state.contacts.contacts;
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
export default slice.reducer;
