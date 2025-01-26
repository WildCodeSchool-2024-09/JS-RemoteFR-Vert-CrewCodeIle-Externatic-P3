import { toast } from "react-toastify";
import userIcone from "../assets/images/UserIcone.png";
import UserFormRegister from "../components/UserFormRegister";
import type { UserFormData } from "../lib/types";

function UserCompanyForm() {
  const handleCandidateFormSubmit = async (userData: UserFormData) => {
    try {
      const newCompanyUser = await fetch(
        `${import.meta.env.VITE_API_URL}/api/usercompanyformregister`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        },
      );
      if (newCompanyUser.ok) {
        toast.success(
          "Votre compte a bien été créé. Bienvenue sur Externatic !",
        );
      } else
        toast.error(
          "Une erreur est survenue lors de votre inscription ! Veuillez réessayer",
        );
    } catch (err) {
      console.info(err);
    }
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center bg-red-100 w-full h-screen my-56">
        <h1 className="text-4xl font-bold text-black mb-6">Entreprise</h1>
        <img
          className="w-24 mb-8"
          src={userIcone}
          alt="Icone de création de compte"
        />

        <UserFormRegister onSubmit={handleCandidateFormSubmit} />
      </section>
    </>
  );
}

export default UserCompanyForm;
