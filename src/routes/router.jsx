import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/home";
import NotFound from "../pages/error/NotFound";
import Bootcamps from "../pages/courses/bootcamps";
import About from "../pages/about/about";
import ContactUs from "../pages/contact/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "*", element: <NotFound /> },
      { path: "/Bootcamps", element: <Bootcamps /> },
      { path: "/About", element: <About /> },
      { path: "/contact", element: <ContactUs /> },
    ],
  },
]);

export default router;
