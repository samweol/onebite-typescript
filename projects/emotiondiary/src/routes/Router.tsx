import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/pages/Home";
import App from "../App";
import Signup from "../pages/Signup/pages/Signup";

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
  ]);

  return <RouterProvider router={router} />;
}
