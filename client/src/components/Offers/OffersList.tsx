import { useEffect, useState } from "react";
import type { OffersDataType } from "../../lib/definition";
import type { Offer } from "../../lib/offers.definitions";

// type Offers = {
//   filteredOffers: OffersDataType[];
// }

function OffersList(filteredOffers: OffersDataType[]) {
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

      <section className="flex w-10/12 mt-[8em] mx-auto">
        <ul className="flex flex-row flex-wrap gap-8 justify-center ">
          {filteredOffers.length > 0 ? (
            filteredOffers.map((offer) => (
              <li
                key={offer.id}
                className="lg:flex lg:flex-col lg:gap-2 lg:w-1/6 border-solid border-2 border-[#CA2060] lg:p-1 hover:bg-slate-100"
              >
                {" "}
                <a href="/" className="flex flex-col gap-2">
                  <h1 className="text-lg font-bold">{offer.title}</h1>
                  <span>{offer.contract_type}</span>
                  <span>{offer.description}</span>
                  <span>Salaire: {offer.wage.toFixed(1)}€</span>
                </a>
              </li>
            ))
          ) : (
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
          )}
        </ul>
      </section>
    </>
  );
}

export default OffersList;
