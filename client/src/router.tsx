import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import AdminLoginPage from "./pages/AdminLoginPage";
import AdminOffersList from "./pages/AdminOffersList";
import CandidateAccountPage from "./pages/CandidateAccountPage";
import LoginCandidatePage from "./pages/CandidateLoginPage";
import CompanyLoginPage from "./pages/CompanyLoginPage";
import CompanyOffersPage from "./pages/CompanyOffersPage";
import HomePage from "./pages/HomePage";
import OffersPage from "./pages/OffersPage";
import OffersResearchPage from "./pages/OffersResearchPage";
import PartnersCompaniesPage from "./pages/PartnersCompaniesPage";
import UpdateCandidateAccountPage from "./pages/UpdateCandidateAccountPage";
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
        path: "/Offers",
        element: <OffersPage />,
      },
      {
        path: "/OffersResearch",
        element: <OffersResearchPage />,
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
        path: "/account/candidate",
        element: <CandidateAccountPage />,
      },
      {
        path: "/account/candidate/update",
        element: <UpdateCandidateAccountPage />,
      },
      {
        path: "/offers/:companyId",
        element: <CompanyOffersPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `${import.meta.env.VITE_API_URL}/api/offersByCompany?companyId=${params.companyId}`,
          );
          if (!response.ok) {
            throw new Response(
              "Erreur lors de la récupération des offres pour cette entreprise",
              {
                status: response.status,
              },
            );
          }
          return response.json();
        },
      },
      {
        path: "/admin/company/:id/offers",
        element: <AdminOffersList />,
      },
    ],
  },
  {
    path: "/login/admin",
    element: <AdminLoginPage />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
