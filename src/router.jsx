import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Template from "../layouts/Template";
import Home from "../pages/Home";
import Advisor from "../pages/Advisor";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Template />,
    children: [
      {index: true, element: <Home />},
      {path: "advisor", element: <Advisor/>}
    ]
  }
])

export default router