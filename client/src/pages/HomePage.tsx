import OffersList from "../components/OffersList";
import SignUp from "../components/SignUp";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <SignUp />
      </div>

      <section className="border-2 border-gray-200 flex-col min-h-screenS max-w-4xl mx-auto p-6 ">
        <OffersList />
      </section>
    </>
  );
};

export default HomePage;
