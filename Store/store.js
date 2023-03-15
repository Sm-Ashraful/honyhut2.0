import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";

import sidebarReducer from "./slices/globalSlice";
import { cartReducer } from "./cart/cart.reducer";

const makeStore = () =>
  configureStore({
    reducer: {
      sidebar: sidebarReducer,
      cart: cartReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMiddleware),
  });

export const wrapper = createWrapper(makeStore);
