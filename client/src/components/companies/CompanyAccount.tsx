import { useEffect, useState } from "react";
import type { UserFormData } from "../../lib/userForm.definitions";
import type { Company } from "../../lib/companies.definition";
import { useCompany } from "../../context/CompanyContext";

function UserAccount() {
  const [userAccount, setUserAccount] = useState<UserFormData | null>(null);

  const [companyAccount, setCompanyAccount] = useState<Company | null>(null);

  const { userId } = useCompany();
  console.log(userId);

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
      fetch(`${import.meta.env.VITE_API_URL}/api/companies/account/${userId}`)
        .then((response) => response.json())
        .then((data) => setCompanyAccount(data))
        .catch((error) => console.error(error));
    }
  }, [userId]);

  return (
    <section className="py-2 rounded-md mt-10 bg-primary w-full flex flex-col justify-center items-center ">
      <h2 className="block text-2xl  text-white font-semibold my-4 text-center">
        Mon profil
      </h2>
      <article className="my-4 block text-base font-medium">
        <p> Prénom: {userAccount?.firstname}</p>
        <p> Nom : {userAccount?.lastname}</p>
        <h2 className="block text-xl  text-white font-semibold my-4 underline">
          Mes coordonnées
        </h2>
        <p> Email: {userAccount?.email}</p>
        <p> Tel : {userAccount?.tel}</p>
        <p> Adresse : {userAccount?.address}</p>
        <span> Ville : {userAccount?.city}</span>
        <span> Code postal : {userAccount?.postal_code}</span>
      </article>
      <article className="my-4 block text-base font-medium">
        <h2 className="block text-xl  text-white font-semibold my-4 underline">
          Mon entreprise
        </h2>
        <p>Nom de l'entreprise : {companyAccount?.company_name}</p>
        <p>Descritpion : {companyAccount?.description}</p>
        <span>Nombre d'employés : {companyAccount?.employee_number}</span>
        <p>Secteur d'activité : {companyAccount?.sector}</p>
        <a href={companyAccount?.website_link}>Lien vers le site</a>
      </article>
    </section>
  );
}
export default UserAccount;
