import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import userIcone from "../assets/images/UserIcone.png";
import UserFormRegister from "../components/userForm/UserFormRegister";
import type { UserFormData } from "../lib/userForm.definitions";

function UserCandidateForm() {
  const navigate = useNavigate();

  const handleCandidateFormSubmit = async (userData: UserFormData) => {
    try {
      const newCandidateUser = await fetch(
        `${import.meta.env.VITE_API_URL}/api/usercandidateformregister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      if (newCandidateUser.ok) {
        toast.success(
          "Votre compte a bien été créé. Bienvenue sur Externatic !",
        );
        navigate("/");
      } else {
        toast.error(
          "Une erreur est survenue lors de votre inscription ! Veuillez réessayer",
        );
      }
    } catch (err) {
      console.info(err);
    }
  };

  return (
    <>
      <section>
        <img
          className="w-24"
          src={userIcone}
          alt="Icone de création de compte"
        />

        <h1 className=" text-4xl font-bold text-black mt-5 mb-5 flex justify-center ">
          Candidat
        </h1>
        <UserFormRegister onSubmit={handleCandidateFormSubmit} />
      </section>
    </>
  );
}

export default UserCandidateForm;
