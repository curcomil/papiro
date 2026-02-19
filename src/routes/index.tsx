import { createBrowserRouter } from "react-router-dom";
//------------------------------------------------------------------
//--------------------------Layouts
import App_colecciones from "../layouts/colecciones_layout";
import App_tesis from "../layouts/tesis_layout";
import App_xmlibris from "../layouts/xmlibris_layout";
//--------------------------------------------------------------------
//----------------------------Pages
//Colecciones-------------------------------------------------------
import { Home_colecciones } from "../modules/colecciones/pages/home_colecciones";
//Tesis-----------------------------------------------------
import { Home_tesis } from "../modules/tesis/pages/home_tesis";
//xmlibris-------------------------------------------------------
import { Home_xmlibris } from "../modules/xmlibris/pages/home_xmlibris";
//-----------------------------------------------------------------
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App_colecciones />,
    children: [{ path: "", element: <Home_colecciones /> }],
  },
  {
    path: "/tesis",
    element: <App_tesis />,
    children: [{ path: "", element: <Home_tesis /> }],
  },
  {
    path: "/xmlibris",
    element: <App_xmlibris />,
    children: [{ path: "", element: <Home_xmlibris /> }],
  },
]);
