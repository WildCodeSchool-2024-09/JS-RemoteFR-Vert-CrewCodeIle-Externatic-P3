import { useLoaderData } from "react-router-dom";
import About from "../components/About/About";
import Offers from "../components/Offers/Offers";
import SignUp from "../components/SignUp";
import type { Offer } from "../lib/offers.definitions";

const HomePage = () => {
  const offersArray = useLoaderData() as Offer[];
  return (
    <div className="flex flex-col min-h-screen">
      <SignUp />
      <About />
      <Offers offers={offersArray} />
    </div>
  );
};

export default HomePage;
