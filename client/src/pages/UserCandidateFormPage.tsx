import userIcone from "../assets/images/UserIcone.png";
import UserFormRegister from "../components/UserFormRegister";
import type { UserFormData } from "../lib/types";

function UserCandidateForm() {
  const handleCandidateFormSubmit = (userData: UserFormData) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/usercandidateformregister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    }).then((response) => response.json());
  };

  return (
    <>
      <section className="flex flex-col items-center justify-center bg-red-100 w-full h-screen my-56">
        <h1 className="text-4xl font-bold text-black mb-6">Candidat</h1>
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

export default UserCandidateForm;
