import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import LoginCandidatePage from "./pages/CandidateLoginPage";
import CompanyLoginPage from "./pages/CompanyLoginPage";
import HomePage from "./pages/HomePage";
import OffersPage from "./pages/OffersPage";
import PartnersCompaniesPage from "./pages/PartnersCompaniesPage";
import UpdateCandidateAccountPage from "./pages/UpdateCandidateAccountPage";
import UserCandidateForm from "./pages/UserCandidateFormPage";
import UserCompanyForm from "./pages/UserCompanyFormPage";
import CandidateAccountPage from "./pages/CandidateAccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/offers`,
          );
          if (!response.ok) {
            throw new Response("Erreur lors de la récupération des offres", {
              status: response.status,
            });
          }
          return response.json();
        },
      },
      {
        path: "/OffersPage",
        element: <OffersPage />,
      },
      {
        path: "/signup/candidate",
        element: <UserCandidateForm />,
      },
      {
        path: "/signup/company",
        element: <UserCompanyForm />,
      },
      {
        path: "/partners-companies",
        element: <PartnersCompaniesPage />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/companies`,
          );
          if (!response.ok) {
            throw new Response(
              "Erreur lors de la récupération des entreprises",
              {
                status: response.status,
              },
            );
          }
          return response.json();
        },
      },
      {
        path: "/login/company",
        element: <CompanyLoginPage />,
      },
      {
        path: "/login/candidate",
        element: <LoginCandidatePage />,
      },
      {
        path: "account/candidate",
        element: <CandidateAccountPage />,
      },
      {
        path: "/account/candidate/update",
        element: <UpdateCandidateAccountPage />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
