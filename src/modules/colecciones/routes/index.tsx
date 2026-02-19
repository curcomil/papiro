import type { RouteObject } from "react-router-dom";
//Layout------------
import App_colecciones from "../../../layouts/colecciones_layout";
//Pages-------------
import { Home_colecciones } from "../pages/home_colecciones";

export const tesisRoutes: RouteObject[] = [
  {
    path: "/",
    element: <App_colecciones />,
    children: [{ index: true, element: <Home_colecciones /> }],
  },
];
