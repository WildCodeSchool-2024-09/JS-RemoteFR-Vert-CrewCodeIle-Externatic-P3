import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import logo from "../assets/images/EXTERNATIC-LOGO-VERTICAL-RVB.png";
import type { Company } from "../lib/companies.definition";

const AdminCompaniesListPage = () => {
  const initialCompanies = useLoaderData() as Company[];
  const [companies, setCompanies] = useState<Company[]>(initialCompanies);

  const handleAnonymizeCompany = async (companyId: number) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/admin/companies/${companyId}`;

    const response = await fetch(apiUrl, {
      method: "PUT",
    });

    if (response.ok) {
      setCompanies(
        companies.map((company) =>
          company.id === companyId
            ? {
                ...company,
                company_name: "###",
                sector: "###",
                description: "###",
                website_link: "###",
              }
            : company,
        ),
      );
    } else {
      console.error("Erreur lors de l'anonymisation de l'entreprise");
    }
  };

  const renderCompaniesRows = () => {
    return companies.map((company) => (
      <tr key={company.id}>
        <td className="border border-gray-300 px-4 py-2">{company.id}</td>
        <td className="border border-gray-300 px-4 py-2">
          {company.company_name}
        </td>
        <td className="border border-gray-300 px-4 py-2">{company.sector}</td>
        <td className="border border-gray-300 px-4 py-2">
          <button
            type="button"
            onClick={() => handleAnonymizeCompany(company.id)}
            className="bg-blue-500 text-white py-1 px-2 rounded-lg text-center text-2xl hover:bg-red-700 transition duration-200 ease-in-out"
          >
            Supprimer
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container mx-auto p-4">
      <img src={logo} alt="Externatic Logo" className="m-6 w-36 h-auto" />
      <h1 className="text-2xl font-bold mb-4">Liste des Entreprises</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">
              Nom de l'Entreprise
            </th>
            <th className="border border-gray-300 px-4 py-2">Secteur</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>{renderCompaniesRows()}</tbody>
      </table>
    </div>
  );
};

export default AdminCompaniesListPage;
