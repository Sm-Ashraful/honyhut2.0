import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";

import sidebarReducer from "./slices/globalSlice";
import { cartReducer } from "./cart/cart.reducer";
import { favReducer } from "./favorite/favorite.reducer";

const makeStore = () =>
  configureStore({
    reducer: {
      sidebar: sidebarReducer,
      cart: cartReducer,
      favorite: favReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMiddleware),
  });

export const wrapper = createWrapper(makeStore);
