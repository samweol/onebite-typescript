import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/pages/Home";
import App from "../App";
import Signup from "../pages/Signup/pages/Signup";
import Signin from "../pages/Signin/pages/Signin";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
  ]);

  return <RouterProvider router={router} />;
}
