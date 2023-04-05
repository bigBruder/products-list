// import { createSelector } from "reselect";
import Product from "../types.ts";

export const productsListSelector = (state: Product) => state.tasks.tasksList;

// export const sortedProductsListSelector = createSelector([productsListSelector], productsList =>
//   productsList.slice().sort((a, b) => a.done - b.done),
// );
