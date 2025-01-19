import { useEffect, useState } from "react";
import type { offersType } from "../lib/offersType";

function OffersList() {
  const [dataOffers, setDataOffers] = useState<offersType[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/OffersPage`)
      .then((response) => response.json())
      .then((data: offersType[]) => {
        setDataOffers(data);
      });
  }, []);

  return (
    <>
      <h1 className="font-bold max-w-4xl mx-auto px-4 py-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex justify-center sm:justify-start">
        Nos offres en cours
      </h1>
      <section className="grid grid-rows-[minmax(100px,_auto)] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {dataOffers?.map((o) => (
          <ul
            key={o.id}
            className="border-2 border-primary ml-4 sm:ml-6 md:ml-8"
          >
            <li className="font-bold text-xl mb-2 p-2">{o.titre}</li>
            <li className="text-xl mb-2 font-medium p-2">{o.location}</li>
            <li className="text-xl mb-2 font-medium p-2">{o.wage} €</li>
          </ul>
        ))}
      </section>
    </>
  );
}

export default OffersList;
