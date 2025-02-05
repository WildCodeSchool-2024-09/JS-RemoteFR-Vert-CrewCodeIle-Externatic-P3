import { useNavigate } from "react-router-dom";
import UserAccount from "../components/user/UserAccount";

function CandidateAccountPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/account/candidate/update");
  return (
    <>
      <h1 className=" text-4xl font-bold text-black mt-5 mb-5 justify-center text-center">
        Mon compte
      </h1>
      <section>
        <UserAccount />
      </section>

      <section className="flex justify-center">
        <button
          type="button"
          onClick={handleClick}
          className="px-5 py-4 my-5 rounded btn-submit hover:bg-orange-600 "
        >
          {" "}
          Mettre à jour mon profil
        </button>
      </section>
    </>
  );
}

export default CandidateAccountPage;
