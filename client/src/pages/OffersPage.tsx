import About from "../components/About/About";
import OffersList from "../components/OffersList";

export default function OffersPage() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <About />
        <OffersList />
      </div>
    </>
  );
}
