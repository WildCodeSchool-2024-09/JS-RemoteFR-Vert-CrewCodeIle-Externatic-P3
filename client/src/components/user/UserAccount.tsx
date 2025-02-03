import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { UserFormData } from "../../lib/userForm.definitions";

function UserAccount() {
  const [userAccount, setUserAccount] = useState<UserFormData | null>(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/user/11`)
      .then((response) => response.json())
      .then((data) => setUserAccount(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <h2>Mes coordonnées</h2>
      <section>
        <p> Prénom: {userAccount?.firstname}</p>
        <p> Nom : {userAccount?.lastname}</p>
        <p> Email: {userAccount?.email}</p>
        <p> Tel : {userAccount?.tel}</p>
        <p> Adresse : {userAccount?.address}</p>
        <span> Ville : {userAccount?.city}</span>
        <span> Code postal : {userAccount?.postal_code}</span>
      </section>
    </>
  );
}
export default UserAccount;
