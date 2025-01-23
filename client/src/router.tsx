import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import HomePage from "./pages/HomePage";
import UserCandidateForm from "./pages/UserCandidateFormPage";
import UserCompanyForm from "./pages/UserCompanyFormPage";

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
        path: "/signup/candidate",
        element: <UserCandidateForm />,
      },
      {
        path: "/signup/company",
        element: <UserCompanyForm />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
