type Product = {
  id: number;
  name: string;
  author: string;
  year: number;
  rating: number;
  price: number;
};

export default Product;

export interface ProductsState {
  productsList: Product[];
  error: null | string;
}

export enum ProductActionTypes {
  FETCH_PRODUCTS = "FETCH_PRODUCTS",
  FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS",
  FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR",
}

export type ProductAction =
  | FetchProductsSuccessAction
  | FetchProductsErrorAction;

interface FetchProductsSuccessAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: any[];
}
interface FetchProductsErrorAction {
  type: ProductActionTypes.FETCH_PRODUCTS_ERROR;
  payload: string;
}
