import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:id",
        element: <Order />,
      },
    ],
  },
]);

export default routers;
