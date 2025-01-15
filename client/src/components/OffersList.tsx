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
      <h1> liste des offres</h1>
      <section>
        {dataOffers?.map((o) => (
          <article key={o.id}>
            <h2>name : {o.name}</h2>
          </article>
        ))}
      </section>
    </>
  );
}

export default OffersList;
