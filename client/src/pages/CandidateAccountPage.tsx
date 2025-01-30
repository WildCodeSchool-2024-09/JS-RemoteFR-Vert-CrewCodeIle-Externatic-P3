import { useOutletContext, useRevalidator } from "react-router-dom";
import { toast } from "react-toastify";

type User = {
  id: number;
  email: string;
};

type Auth = {
  user: User;
  token: string;
};

function CandidateAccountPage() {
  const { auth } = useOutletContext() as { auth: Auth | null };
  const revalidator = useRevalidator();

  const handleUploadCandidateInformation = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/candidate/account`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth?.token}`,
          },
          body: JSON.stringify({
            user_id: auth?.user.id,
          }),
        },
      );

      if (response.status === 201) {
        revalidator.revalidate();
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
      <section>
        <h1>Mon compte</h1>
        {auth != null && (
          <form onSubmit={handleUploadCandidateInformation}>
            <label htmlFor="cv">
              <input type="text" id="cv" />
            </label>
            <label htmlFor="photo">
              <input type="text" id="photo" />
            </label>
            <label htmlFor="is_disabled">
              Reconnaissance travailleur handicapé ?
              <input
                type="radio"
                name="is_disabled"
                id="is_disabled_true"
                value="1"
              />{" "}
              Oui
              <input
                type="radio"
                name="is_disabled"
                id="is_disabled_false"
                value="0"
              />{" "}
              Non
            </label>
            <button type="submit">Renseigner les éléments</button>
          </form>
        )}
      </section>
    </>
  );
}
export default CandidateAccountPage;
