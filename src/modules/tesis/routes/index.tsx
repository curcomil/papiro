import type { RouteObject } from "react-router-dom";
//Layout------------
import App_tesis from "../../../layouts/tesis_layout";
//Pages-------------
import { Home_tesis } from "../pages/home_tesis";

export const tesisRoutes: RouteObject[] = [
  {
    path: "/tesis",
    element: <App_tesis />,
    children: [{ index: true, element: <Home_tesis /> }],
  },
];
