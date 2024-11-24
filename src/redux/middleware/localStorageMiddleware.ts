import { Middleware } from "@reduxjs/toolkit";

const localStorageMiddleware: Middleware = (store) => (next) => (action) => {
  const result = next(action);
  const state = store.getState();
  localStorage.setItem("pages", JSON.stringify(state.pagesSlice.pages));

  return result;
};

export default localStorageMiddleware;
