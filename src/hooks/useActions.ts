import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProductsActionCreators from "../products/products.action.ts";

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ProductsActionCreators, dispatch);
};
