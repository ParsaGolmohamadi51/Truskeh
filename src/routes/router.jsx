import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import NotFound from "../pages/error/NotFound";
import Bootcamps from "../pages/courses/bootcamps";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "*", element: <NotFound /> },
      { path: "/Bootcamps", element: <Bootcamps /> },
    ],
  },
]);

export default router;
