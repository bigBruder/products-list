import * as productsGateway from "./productsGateway.ts";
// import { productsListSelector } from "./products.selectors.ts";
import Product from "../types.ts";
import { Dispatch } from "react";
import { ProductActionTypes, ProductAction } from "../types.ts";
import axios from "axios";
import { baseUrl } from "./productsGateway.ts";

export const PRODUCTS_LIST_RECEIVED = "PRODUCTS_LIST_RECEIVED";

export const productsListReceived = (productsList: Product) => {
  const action = {
    type: PRODUCTS_LIST_RECEIVED,
    payload: {
      productsList,
    },
  };
  return action;
};

export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductAction>) => {
    try {
      const response = await axios.get(baseUrl);
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: ProductActionTypes.FETCH_PRODUCTS_ERROR,
        payload: "Сталася помилка при загрузці товарів",
      });
    }
  };
};

export const getProductsList = () => {
  const thunkAction = function (dispatch: Dispatch<ProductAction>) {
    productsGateway.fetchProductsList().then((productsList) => {
      dispatch(productsListReceived(productsList));
    });
  };
  return thunkAction;
};

// export const updateProduct = (productId:number) => {
//   const thunkAction = function (dispatch, getState) {
//     const state = getState();
//     const productsList = productsListSelector(state);
//     const product = productsList.find((product) => product.id === productId);
//     const updatedProduct = {
//       ...product,
//       done: !product.done,
//     };
//     productsGateway
//       .updateTask(productId, updatedProduct)
//       .then(() => dispatch(getProductsList()));
//   };
//   return thunkAction;
// };

export const deleteProduct = (productId: number) => {
  const thunkAction = function (dispatch) {
    productsGateway
      .deleteProduct(productId)
      .then(() => dispatch(getProductsList()));
  };
  return thunkAction;
};

export const createProduct = (product: Product) => {
  const thunkAction = function (dispatch) {
    const taskData = {
      product,
      done: false,
    };
    productsGateway
      .createProduct(taskData)
      .then(() => dispatch(getProductsList()));
  };
  return thunkAction;
};
