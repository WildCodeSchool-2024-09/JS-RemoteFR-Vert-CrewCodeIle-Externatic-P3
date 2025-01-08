import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import UserFormRegister from "./components/UserFormRegister";
import HomePage from "./pages/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/userformregister",
        element: <UserFormRegister />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
