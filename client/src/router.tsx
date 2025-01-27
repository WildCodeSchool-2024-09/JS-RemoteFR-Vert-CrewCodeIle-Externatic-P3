import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";

import HomePage from "./pages/HomePage";
import OffersPage from "./pages/OffersPage";
import PartnersCompaniesPage from "./pages/PartnersCompaniesPage";

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
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
