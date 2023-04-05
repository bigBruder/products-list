import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productsReducer from "./products/products.reducer.ts";

export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof productsReducer>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
