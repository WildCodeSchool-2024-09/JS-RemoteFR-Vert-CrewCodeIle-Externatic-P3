import { toast } from "react-toastify";
import CandidateAccount from "../components/userForm/CandidateAccount";
import type { CandidateFormData } from "../lib/userForm.definitions";

function CandidateAccountPage() {
  const handleUploadCandidateInformation = async (data: CandidateFormData) => {
    try {
      const formData = new FormData();

      if (data.photo && data.photo.length > 0) {
        formData.append("photo", data.photo[0]);
      }

      if (data.cv && data.cv.length > 0) {
        formData.append("cv", data.cv[0]);
      }

      formData.append("user_id", "11");
      formData.append("is_disabled", data.is_disabled);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/candidate/account`,
        {
          method: "POST",
          body: formData,
        },
      );
      console.log(formData);

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
