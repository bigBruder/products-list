import React from "react";
import { Route, Routes, useRoutes, BrowserRouter } from "react-router-dom";
import AddProductsForm from "./AddProductForm.tsx";
import MainPage from "./mainPage/MainPage.tsx";

const Main: React.FC = () => {
  //   const routes = useRoutes([{ path: "/", element: <ProductsList /> }]);
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/add-product" element={<AddProductsForm />} />
    </Routes>
  );
};

export default Main;
