import { useEffect, useState } from "react";
import type { Offer } from "../../lib/offers.definitions";

function OffersList() {
  const [dataOffers, setDataOffers] = useState<Offer[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/OffersPage`)
      .then((response) => response.json())
      .then((data: Offer[]) => {
        setDataOffers(data);
      });
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 sm:mb-4 md:mb-6 p-2 sm:p-4 md:p-6">
        Nos offres en cours
      </h1>

      <section className="grid grid-rows-[minmax(100px,_auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  mb-2">
        {dataOffers?.map((o) => (
          <ul
            key={o.id}
            className="border-2 border-primary ml-4 sm:ml-6 md:ml-8"
          >
            <li className="font-bold text-xl mb-2 p-2">{o.title}</li>
            <li className="text-xl mb-2 font-medium p-2">{o.location}</li>
            <li className="text-xl mb-2 font-medium p-2">
              {o.wage.toFixed(2)} €
            </li>
          </ul>
        ))}
      </section>
    </>
  );
}

export default OffersList;
