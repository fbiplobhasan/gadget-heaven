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
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Components/PrivateRoute/PrivateRoute";

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
        element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        loader: () => fetch("/products.json"),
      },
      {
        path: "/cartlist",
        element: <CartList></CartList>,
      },
      {
        path: "/cart",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/wishlist",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
