import { toast } from "react-toastify";
import CandidateAccount from "../components/userForm/CandidateAccount";

function CandidateAccountPage() {
  const handleUploadCandidateInformation = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/candidate/account`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

            // Authorization: `Bearer ${auth?.token}`,
          },
          body: JSON.stringify({ user_id: 17 }),
        },
      );

      if (response.status === 201) {
        toast.success("Les informations sont bien mis à jour");
      } else {
        toast.error("Une erreur s'est produite ! Veuillez réessayer");
      }
    } catch (err) {
      err;
    }
  };

  return (
    <>
      <CandidateAccount onSubmit={handleUploadCandidateInformation} />
    </>
  );
}

export default CandidateAccountPage;
