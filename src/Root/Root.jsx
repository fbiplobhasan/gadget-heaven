import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import CategoryBtn from "../Components/CategoryBtn/CategoryBtn";
import AllProducts from "../Components/AllProducts/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/products.json"),
        children: [
          {
            path: "/category/:category",
            element: <CategoryBtn></CategoryBtn>,
            loader: () => fetch("../categories.json"),
          },
        ],
      },
      {
        path: "/allproducts",
        element: <AllProducts></AllProducts>,
        loader: () => fetch('/products.json')
      },
    ],
  },
]);

export default router;
