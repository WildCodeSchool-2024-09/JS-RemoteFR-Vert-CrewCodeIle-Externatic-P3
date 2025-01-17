import UserFormRegister from "../components/UserFormRegister";

function UserForm() {
  return (
    <>
      <UserFormRegister
        onSubmit={(userData) => {
          fetch(`${import.meta.env.VITE_API_URL}/api/userformregister`, {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
          }).then((response) => response.json());
        }}
      />
    </>
  );
}

export default UserForm;
