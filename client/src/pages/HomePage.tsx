import { useLoaderData } from "react-router-dom";
import About from "../components/About/About";
import Offers from "../components/Offers";
import SignUp from "../components/SignUp";
import type { Offer } from "../lib/offers.definitions";
import Carousel from "../components/Carousel/Carousel";

const HomePage = () => {
  const offersArray = useLoaderData() as Offer[];
  return (
    <div className="flex flex-col min-h-screen">
      <SignUp />
      <About />
      <Offers offers={offersArray} />
      <Carousel />
    </div>
  );
};

export default HomePage;
