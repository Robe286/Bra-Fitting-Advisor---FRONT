import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Template from "../layouts/Template";
import Home from "../pages/Home";
import Advisor from "../pages/Advisor";
import Dashboard from "../pages/Dashboard";
import RegisterAndLogin from "../pages/RegisterAndLogin";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Template />,
    children: [
      { index: true, element: <Home /> },
      { path: "advisor", element: <Advisor/> },
      { path: "dasboard", element: <Dashboard/> },
      { path: "register", element: <RegisterAndLogin/> }
    ]
  }
])

export default router