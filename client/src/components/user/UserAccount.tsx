import { useEffect, useState } from "react";
import userIcone from "../../assets/images/UserIcone.png";
import type {
  CandidateFormData,
  UserFormData,
} from "../../lib/userForm.definitions";

function UserAccount() {
  const [userAccount, setUserAccount] = useState<UserFormData | null>(null);
  const [candidateAccount, setCandidateAccount] =
    useState<CandidateFormData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/11`)
      .then((response) => response.json())
      .then((data) => setUserAccount(data))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/candidate/account/11`)
      .then((response) => response.json())
      .then((data) => setCandidateAccount(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>Mon profil</h2>
      <section>
        <img
          src={
            candidateAccount?.photo
              ? `${import.meta.env.VITE_API_URL}/uploads/${candidateAccount.photo}`
              : userIcone
          }
          alt="Représentation photographique du candidat"
        />{" "}
        <p> Prénom: {userAccount?.firstname}</p>
        <p> Nom : {userAccount?.lastname}</p>
      </section>
      <h2>Mes coordonnées</h2>
      <section>
        <p> Email: {userAccount?.email}</p>
        <p> Tel : {userAccount?.tel}</p>
        <p> Adresse : {userAccount?.address}</p>
        <span> Ville : {userAccount?.city}</span>
        <span> Code postal : {userAccount?.postal_code}</span>
      </section>
      <h2>Mes documents</h2>
      <section>
        <span>
          Reconnaissance travailleur handicapé :{" "}
          {candidateAccount?.is_disabled ? "Oui" : "Non"}
        </span>
      </section>
    </>
  );
}
export default UserAccount;
