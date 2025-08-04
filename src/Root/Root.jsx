import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import CategoryBtn from "../Components/CategoryBtn/CategoryBtn";
import AllProducts from "../Components/AllProducts/AllProducts";
import ProductDetails from "../Pages/productDetails/ProductDetails";
import Dashboard from "../Pages/Dashboard/Dashboard";
import CartList from "../Components/CartList/CartList";
import Statistics from "../Pages/Statistics/Statistics";
import Support from "../Pages/Support/Support";

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
      {
        path: "/productDetails/:id",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch('/products.json')
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/products.json')
      },
      {
        path: "/cartlist",
        element:<CartList></CartList> ,
      },
      {
        path: "/cart",
        element:<Dashboard /> ,
      },
      {
        path: "/wishlist",
        element:<Dashboard /> ,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
    ],
  },
]);

export default router;
