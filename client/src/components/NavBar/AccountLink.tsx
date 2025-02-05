import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userIcone from "../../assets/images/UserIcone.png";
import { useAuth } from "../../context/AuthContext";
import type {
  CandidateFormData,
  UserFormData,
} from "../../lib/userForm.definitions";

function AccountLink() {
  const { userId } = useAuth();
  const navigate = useNavigate();
  const handleAccountClick = () => navigate("/account/candidate");

  const [userAccount, setUserAccount] = useState<UserFormData | null>(null);
  const [candidateAccount, setCandidateAccount] =
    useState<CandidateFormData | null>(null);

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
    <>
      {userId ? (
        <>
          <img
            className="w-20 items-center rounded-full"
            src={
              candidateAccount?.photo
                ? `${import.meta.env.VITE_API_URL}/uploads/${candidateAccount.photo}`
                : userIcone
            }
            alt="photographie du candidat"
          />
          <p>
            {userAccount?.firstname} {userAccount?.lastname}
          </p>
          <button type="button" onClick={handleAccountClick}>
            {" "}
            Lien vers mon compte
          </button>
        </>
      ) : null}
    </>
  );
}

export default AccountLink;
