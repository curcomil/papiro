import type { RouteObject } from "react-router-dom";
//Layout------------
import App_xmlibris from "../../../layouts/xmlibris_layout";
//Pages-------------
import { Home_xmlibris } from "../pages/home_xmlibris";
import { Login_xmlibris } from "../pages/login_xmlibris";

export const xmlibrisRoutes: RouteObject[] = [
  {
    path: "/xmlibris",
    element: <App_xmlibris />,
    children: [{ index: true, element: <Home_xmlibris /> }],
  },

  {
    path: "/xmlibris/login",
    element: <Login_xmlibris />,
  },
];
