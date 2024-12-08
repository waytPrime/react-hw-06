import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import sliceFilter from "./FilterSlice";
import sliceContact from "./ContactSlice";
import sliceAuth from "./AuthSlice";

const persistedAuthReducer = persistReducer(
  {
    key: "auth/token",
    storage,
    whitelist: ["token"],
  },
  sliceAuth
);

export const store = configureStore({
  reducer: {
    contacts: sliceContact,
    filter: sliceFilter,
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const storag = persistStore(store);
