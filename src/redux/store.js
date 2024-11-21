import { configureStore } from "@reduxjs/toolkit";

import sliceFilter from "./FilterSlice";
import sliceContact from "./ContactSlice";

export const store = configureStore({
  reducer: {
    contacts: sliceContact,
    filter: sliceFilter,
  },
});
