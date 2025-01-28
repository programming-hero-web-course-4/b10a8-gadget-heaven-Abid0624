import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Support from "../Pages/Support";
import Cards from "../Components/Cards";
import CardDetails from "../Pages/CardDetails";
import Error from "../Components/Error";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("../categories.json"),
        children: [
          {
            path: "/",
            element: <Cards></Cards>,
            loader: () => fetch("../data.json"),
          },
          {
            path: "/category/:category",
            element: <Cards></Cards>,
            loader: () => fetch("../data.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/support",
        element: <Support></Support>,
      },
      {
        path: "/card/:id",
        element: <CardDetails></CardDetails>,
        loader: () => fetch("../data.json"),
      },
    ],
  },
]);

export default routes;
