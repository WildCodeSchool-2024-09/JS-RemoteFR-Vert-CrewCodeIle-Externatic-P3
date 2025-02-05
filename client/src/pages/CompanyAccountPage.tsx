import { useNavigate } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import CompanyAccount from "../components/companies/CompanyAccount";

function CompanyAccountPage() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/account/company/update");

  return (
    <>
      <h1 className=" text-4xl font-bold text-black mt-5 mb-5 justify-center text-center">
        Mon compte (Entreprise)
      </h1>
      <FaUsers
        style={{ height: "120px", width: "120px" }}
        className="text-white mx-auto"
      />
      <section>
        <CompanyAccount />
      </section>

      <section className="flex justify-center">
        <button
          type="button"
          onClick={handleClick}
          className="px-5 py-4 my-5 rounded btn-submit hover:bg-orange-600 "
        >
          {" "}
          Ajouter des informations
        </button>
      </section>
    </>
  );
}

export default CompanyAccountPage;
