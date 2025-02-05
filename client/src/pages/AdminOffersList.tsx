import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import type { OffersDataType } from "../lib/offers.definitions";

export default function AdminOffersList() {
  const [offersList, setOffersList] = useState<OffersDataType[]>([]);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/admin/companyOfferList/${id}`)
      .then((res) => res.json())
      .then((data: OffersDataType[]) => {
        setOffersList(data);
      });
  }, [id]);

  console.info(offersList);

  return (
    <>
      {offersList?.length > 0 ? (
        offersList.map((o) => (
          <section key={o.id}>
            <button type="button" onClick={() => navigate(`/offer/${id}`)}>
              <h2>Offre:{o.id}</h2>
              <span>{o.title}</span>
            </button>
          </section>
        ))
      ) : (
        <span>"Aucune offre"</span>
      )}
      <button type="button">Ajouter</button>;
    </>
  );
}
