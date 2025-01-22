import userIcone from "../assets/images/UserIcone.png";
import UserFormRegister from "../components/UserFormRegister";
import type { UserFormData } from "../lib/types";

function UserForm() {
  const roleData = {
    label: "Candidat",
  };

  const handleUserFormSubmit = (userData: UserFormData) => {
    fetch(`${import.meta.env.VITE_API_URL}/api/roleformregister`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(roleData),
    })
      .then((response) => response.json())
      .then((role) => {
        const newUser = { ...userData, role_id: role.insertId };
        return fetch(`${import.meta.env.VITE_API_URL}/api/userformregister`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      })
      .then((response) => response.json());
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

        <UserFormRegister onSubmit={handleUserFormSubmit} />
      </section>
    </>
  );
}

export default UserForm;
