import { configureStore } from "@reduxjs/toolkit";
import pagesReducer from "./slices/pagesSlice";
import localStorageMiddleware from "./middleware/localStorageMiddleware";

export const store = configureStore({
  reducer: {
    pagesSlice: pagesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware), // Add the middleware here
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
