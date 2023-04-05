import { Dispatch } from "redux";
import type Product from "../types";
import { ProductAction } from "../types";
export const baseUrl =
  "https://633aae56471b8c3955724549.mockapi.io/api/v1/products";

export const createProduct = (productData: Product) =>
  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

// export const updateProduct = (id: number, productData: Record<string, Product>) =>
//   fetch(`${baseUrl}/${id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(productData),
//   });

export const deleteProduct = (id: number) =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });

export const fetchProductsList = () => fetch(baseUrl).then((res) => res.json());
