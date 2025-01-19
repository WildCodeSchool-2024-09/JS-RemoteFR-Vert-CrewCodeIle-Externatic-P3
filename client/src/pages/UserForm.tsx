import userIcone from "../assets/images/UserIcone.png";
import UserFormRegister from "../components/UserFormRegister";

function UserForm() {
  const roleData = {
    label: "Candidat",
  };

  return (
    <article className="flex flex-col items-center justify-center bg-red-100 w-full h-screen my-56">
      <h1 className="text-4xl font-bold text-white mb-6">Candidat</h1>
      <img
        className="w-24 mb-8"
        src={userIcone}
        alt="Icone de création de compte"
      />

      <UserFormRegister
        onSubmit={(userData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/roleformregister`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(roleData),
          }).then((response) => response.json());

          fetch(`${import.meta.env.VITE_API_URL}/api/userformregister`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }).then((response) => response.json());
        }}
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Envoyer le formulaire
      </button>
    </article>
  );
}

export default UserForm;
