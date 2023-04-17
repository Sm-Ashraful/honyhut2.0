// store.js
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import sidebarReducer from "./slices/globalSlice";
import { cartReducer } from "./cart/cart.reducer";
import { favReducer } from "./favorite/favorite.reducer";
import { orderReducer } from "./customer/order/order.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // persist only the cart slice of the store
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    sidebar: sidebarReducer,
    cart: cartReducer,
    favorite: favReducer,
    order: orderReducer,
  })
);

const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(thunkMiddleware),
  });

export const wrapper = createWrapper(makeStore, { debug: true });
