import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Advisor from "./pages/Advisor";
import Template from "./layouts/Template";
import RegisterAndLogin from "./pages/RegisterAndLogin";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error />,
    element: <Template />,
    children: [
      { index: true, element: <Home /> },
      { path: "register", element: <RegisterAndLogin /> },
      {
        path: "advisor",
        element: (
          <PrivateRoute>
            <Advisor />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router