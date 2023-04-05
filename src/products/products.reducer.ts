import { PRODUCTS_LIST_RECEIVED } from "./products.action.ts";
import { ProductsState, ProductAction, ProductActionTypes } from "../types.ts";

// interface ProductListReceived {
//   type: typeof PRODUCTS_LIST_RECEIVED;
//   payload: any[]
// }

const initialState: ProductsState = {
  productsList: [],
  error: null,
};

const productsReducer = (
  state = initialState,
  action: ProductAction
): ProductsState => {
  switch (action.type) {
    case ProductActionTypes.FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsList: action.payload,
        error: null,
      };
    case ProductActionTypes.FETCH_PRODUCTS_ERROR:
      return {
        ...state,
        productsList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
