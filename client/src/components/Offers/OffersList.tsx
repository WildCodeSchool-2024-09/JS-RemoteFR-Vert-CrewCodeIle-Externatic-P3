import { useEffect, useState } from "react";
import type { Offer } from "../../lib/offers.definitions";
import { useNavigate } from "react-router-dom";

function OffersList() {
  const [dataOffers, setDataOffers] = useState<Offer[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/offers`)
      .then((response) => response.json())
      .then((data: Offer[]) => {
        setDataOffers(data);
      });
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 p-2 sm:p-4 md:p-6 text-center">
        Nos offres en cours
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {dataOffers?.map((o) => (
          <ul
            key={o.id}
            className="border-2 border-primary shadow-md bg-white p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 md:mx-6"
          >
            <li className="font-bold text-xl mb-2">{o.title}</li>
            <li className="text-lgt mb-2">{o.location}</li>
            <li className="text-lg font-semibold">{o.wage.toFixed(2)} €</li>
            <li className="mt-4">
              <button
                type="button"
                className="text-white bg-primary px-4 py-2 rounded "
                onClick={() => navigate(`/offer/${o.id}`)}
              >
                Voir l'offre
              </button>
            </li>
          </ul>
        ))}
      </section>
    </>
  );
}

export default OffersList;
