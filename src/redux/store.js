import sliceFilter from "./FilterSlice";
import sliceContact from "./ContactSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contact: sliceContact,
    filter: sliceFilter,
  },
});
export default store;
