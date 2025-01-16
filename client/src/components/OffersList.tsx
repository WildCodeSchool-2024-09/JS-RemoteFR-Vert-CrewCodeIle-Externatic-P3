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
      <h1 className="max-w-4xl mx-auto px-4 py-6  flex justify-around text-2xl">
        Nos offres en cours
      </h1>

      <section className="grid grid-cols-3 gap-4">
        {dataOffers?.map((o) => (
          <ul key={o.id} className=" shadow-lg bg-[#851342] ">
            <li className="text-white text-xl mb-2  font-medium ">
              {" "}
              {o.name}{" "}
            </li>
            <li className=" text-white text-xl mb-2 font-medium  ">
              {" "}
              {o.salaire}
            </li>
            <li className="text-white text-xl mb-2 font-medium "> {o.ville}</li>
            <li className="text-white text-xl mb-2 font-medium "> {o.id}</li>
          </ul>
        ))}
      </section>
    </>
  );
}

export default OffersList;
