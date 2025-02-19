import { useEffect, useState } from "react";
import userIcone from "../../assets/images/UserIcone.png";
import { useAuth } from "../../context/AuthContext";
import type {
  CandidateFormData,
  UserFormData,
} from "../../lib/userForm.definitions";

function UserAccount() {
  const [userAccount, setUserAccount] = useState<UserFormData | null>(null);

  const [candidateAccount, setCandidateAccount] =
    useState<CandidateFormData | null>(null);

  const { userId } = useAuth();

  useEffect(() => {
    if (userId) {
      fetch(`${import.meta.env.VITE_API_URL}/api/user/${userId}`)
        .then((response) => response.json())
        .then((data) => setUserAccount(data))
        .catch((error) => console.error(error));
    }
  }, [userId]);

  useEffect(() => {
    if (userId) {
      fetch(`${import.meta.env.VITE_API_URL}/api/candidate/account/${userId}`)
        .then((response) => response.json())
        .then((data) => setCandidateAccount(data))
        .catch((error) => console.error(error));
    }
  }, [userId]);

  return (

    <div className="flex justify-center items-center m-2">
    <section className="p-5 w-full max-w-sm md:max-w-md lg:max-w-lg bg-white border border-primary rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <h2 className="block text-2xl text-primary font-semibold my-4 text-center pb-4">
        Mon profil
      </h2>
  
      <article className="flex flex-col items-center pb-6">
        <img
          className="w-40 h-40 md:w-40 md:h-40 object-cover rounded-full border-2 border-gray-300"
          src={
            candidateAccount?.photo
              ? `${import.meta.env.VITE_API_URL}/uploads/${candidateAccount.photo}`
              : userIcone
          }
          alt="Représentation photographique du candidat"
        />
      </article>
  
      <article className="flex flex-wrap justify-center border-b border-gray-400 py-2 bg-gray-50">
        <p className="whitespace-nowrap">{userAccount?.firstname}</p>
        <p className="whitespace-nowrap ml-2">{userAccount?.lastname}</p>
      </article>
  
      <h2 className="mb-1 text-xl text-primary font-semibold">Mes coordonnées</h2>
  
      <article className="flex flex-col border-b border-gray-400 bg-gray-50 p-2 text-sm sm:text-base">
        <p>Email : {userAccount?.email}</p>
        <p>Tel : {userAccount?.tel}</p>
        <p>Adresse : {userAccount?.address}</p>
        <p>Ville : {userAccount?.city}</p>
        <p>Code postal : {userAccount?.postal_code}</p>
      </article>
  
      <h2 className="block text-xl text-primary font-semibold my-2">
        Mes documents
      </h2>
  
      <article className="flex flex-col bg-gray-50 p-2 text-sm sm:text-base">
        <span className="whitespace-nowrap">
          Reconnaissance travailleur handicapé :{" "}
          {candidateAccount?.is_disabled ? "Oui" : "Non"}
        </span>
        {candidateAccount?.cv && (
          <a
            href={`${import.meta.env.VITE_API_URL}/uploads/${candidateAccount.cv}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap items-center gap-2 text-primary underline mt-2 md:mt-0"
          >
            📄 Visualiser mon CV
          </a>
        )}
      </article>
    </section>
  </div>
  );
}
export default UserAccount;