import { createBrowserRouter } from "react-router-dom";
import { xmlibrisRoutes } from "../modules/xmlibris/routes";
import { tesisRoutes } from "../modules/tesis/routes";

export const router = createBrowserRouter([...xmlibrisRoutes, ...tesisRoutes]);
