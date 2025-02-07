import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import type { Offer } from "../lib/offers.definitions";

const DetailsOfferCandidatPage = () => {
  const offer = useLoaderData() as Offer[];

  const handleclik = () => {
    toast.success("Bravo ! vous venez de postuler à cette offre");
  };

  return (
    <>
      <section className="grid place-items-center gap-6 p-4 ">
        {offer.map((o) => (
          <ul
            key={o.id}
            className="border-2 border-primary shadow-md bg-slate-100 
                 w-full max-w-2xl p-6 mx-auto"
          >
            <h1 className="font-bold text-3xl pb-8">Intitulé de l'offre</h1>
            <li className="text-xl mb-2">{o.title}</li>
            <li className="text-xl mb-2 pb-6">{o.location}</li>
            <h2 className="font-bold text-xl ">Description du poste : </h2>
            <li className="text-xl "> {o.description} </li>
          </ul>
        ))}
      </section>

      <section className="p-4">
        <div className="flex gap-4 justify-center">
          <div>
            <button
              type="button"
              className="flex flex-col items-center px-6 py-2 text-xl font-medium rounded-md btn-secondary sm:px-20 sm:py-4"
            >
              <span>Ajouter aux favoris</span>
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={handleclik}
              className="flex flex-col items-center px-6 py-2 text-xl font-medium rounded-md btn-primary sm:px-20 sm:py-4"
            >
              <span>postuler</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default DetailsOfferCandidatPage;
