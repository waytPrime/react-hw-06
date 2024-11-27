import { configureStore } from "@reduxjs/toolkit";

import sliceFilter from "./FilterSlice";
import sliceContact from "./ContactSlice";
import sliceAuth from "./AuthSlice";

export const store = configureStore({
  reducer: {
    contacts: sliceContact,
    filter: sliceFilter,
    auth: sliceAuth,
  },
});
