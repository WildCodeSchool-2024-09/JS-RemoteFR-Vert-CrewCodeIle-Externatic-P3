import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import logo from "../assets/images/EXTERNATIC-LOGO-VERTICAL-RVB.png";
import type { UserFormData } from "../lib/userForm.definitions";

const AdminCandidatesListPage = () => {
  const initialCandidates = useLoaderData() as UserFormData[];
  const [candidates, setCandidates] =
    useState<UserFormData[]>(initialCandidates);

  const handleAnonymizeCandidate = async (candidateId: number) => {
    const apiUrl = `${import.meta.env.VITE_API_URL}/admin/candidates/${candidateId}`;

    const response = await fetch(apiUrl, {
      method: "PUT",
    });

    if (response.ok) {
      setCandidates(
        candidates.map((candidate) =>
          candidate.id === candidateId
            ? {
                ...candidate,
                firstname: "###",
                lastname: "###",
                email: "###",
                address: "###",
                postal_code: 0,
                city: "###",
                tel: 0,
                password: candidate.password,
                confirmPassword: candidate.confirmPassword,
                is_active: candidate.is_active,
                is_role: candidate.is_role,
              }
            : candidate,
        ),
      );
    } else {
      const errorDetail = await response.text();
      console.error(
        "Erreur lors de l'anonymisation du candidat :",
        errorDetail,
      );
    }
  };

  const renderCandidatesRows = () => {
    return candidates.map((candidate) => (
      <tr key={candidate.id}>
        <td className="border border-gray-300 px-4 py-2">{candidate.id}</td>
        <td className="border border-gray-300 px-4 py-2">
          {candidate.firstname}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          {candidate.lastname}
        </td>
        <td className="border border-gray-300 px-4 py-2">
          <button
            type="button"
            onClick={() => handleAnonymizeCandidate(candidate.id)}
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
      <h1 className="text-2xl font-bold mb-4">Liste des Candidats</h1>
      <table className="min-w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">ID</th>
            <th className="border border-gray-300 px-4 py-2">Prénom</th>
            <th className="border border-gray-300 px-4 py-2">Nom</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>{renderCandidatesRows()}</tbody>
      </table>
    </div>
  );
};

export default AdminCandidatesListPage;
