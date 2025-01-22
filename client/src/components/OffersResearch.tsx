import { SmileIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { OffersDataType, SearchDataType } from "../lib/definition";

export default function OffersResearch() {
  const VITE_API_URL = import.meta.env.VITE_API_URL;
  const [search, setSearch] = useState<string>("");
  // const [candidates, setCandidates] = useState<CandidateDataType[]>([]);
  const [offers, setOffers] = useState<OffersDataType[]>([]);
  const [filteredOffers, setFilteredOffers] = useState<OffersDataType[]>([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch(`${VITE_API_URL}/api/offers`);
        const data: OffersDataType[] = await response.json();
        setOffers(data);
      } catch (error) {
        console.error("Error fetching offers");
      }
    };

    fetchOffers();
  }, []);

  const handleFilteredOffers = async (searchData: SearchDataType) => {
    try {
      const response = await fetch(`${VITE_API_URL}/api/offers`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(searchData),
      });
      const data: OffersDataType[] = await response.json();
      setFilteredOffers(data);
    } catch (err) {
      console.error("error");
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchDataType>();
  const onSubmit: SubmitHandler<SearchDataType> = (data) => {
    handleFilteredOffers(data);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <section>
      <section className="flex place-content-between">
        <a href="/">
          <img
            className="h-[6em] w-[8em]"
            src="../src/assets/images/EXTERNATIC-LOGO-VERTICAL-RVB.png"
            alt="Externatic logo"
          />
        </a>

        <section className="mt-4 flex flex-col gap-4">
          {/* Don't forget to replace smileIcon with candidate picture profile from DB */}
          <section className="lg:flex lg:gap-16">
            <SmileIcon />

            <section className="lg:flex lg:flex-col gap-2">
              <p className="mt-2">Nom Prénom </p>
              <button
                type="button"
                className="mt-2 h-10 mr-4 rounded-md p-2 border-solid border-2 border-[#CA2060] hover:border-black lg:bg-[#CA2060] lg:w-[16em] lg:text-white lg:hover:bg-black"
              >
                Mon compte
              </button>
            </section>
          </section>
        </section>
      </section>

      <section className="flex w-fit mx-auto mt-16 lg:mt-32">
        <form
          className="flex flex-col gap-8 lg:flex-row lg:gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col ">
            {errors.titre && (
              <span className="text-lg font-bold">{errors.titre.message}</span>
            )}
            <label htmlFor="titre">Intitulé du poste:</label>
            <input
              id="titre"
              {...register("titre", {
                required: "Aucune offre correspondante à votre recherche",
                pattern:
                  /\b(S[EÉÈÊ]O Sp[eéèêë]cialiste|Sp[eéèêë]cialiste en marketing digital|Analyste de donn[éeèêë]s|Scientifique des donn[éeèêë]s|D[eéèêë]veloppeur Web|D[eéèêë]veloppeur Frontend|D[eéèêë]veloppeur Backend|D[eéèêë]veloppeur Fullstack|Designer UI\/UX|Chef de produit|Chef de projet|Ing[eéèêë]nieur DevOps|Analyste en cybers[éeèêë]curit[éeèêë]|Responsable de contenu|Responsable des m[éeèêë]dias sociaux|Sp[eéèêë]cialiste en e-commerce|D[eéèêë]veloppeur mobile|Ing[eéèêë]nieur en IA|Ing[eéèêë]nieur en apprentissage automatique|Architecte cloud|D[eéèêë]veloppeur blockchain)\b/i,
              })}
              type="search"
              placeholder="Rechercher un poste..."
              value={search}
              onChange={handleUserInput}
            />
          </div>

          <section className="flex flex-col">
            <label htmlFor="contract_type">Type de contrat:</label>

            <div className="flex gap-2">
              <input
                {...register("contract_type")}
                type="checkbox"
                value="CDI"
              />
              CDI
              <input
                {...register("contract_type")}
                type="checkbox"
                value="CDD"
              />
              CDD
              <input
                {...register("contract_type")}
                type="checkbox"
                value="Alternance"
              />
              Alternance
            </div>
          </section>

          <div className="flex flex-col">
            <label htmlFor="location">Localisaton:</label>
            <input
              {...register("location")}
              id="location"
              type="text"
              placeholder="Paris, Lyon ..."
            />
          </div>

          <div className="flex flex-row">
            <label htmlFor="is_teleworking">Télétravail Souhaité :</label>
            <input
              id="is_teleworking"
              {...register("is_teleworking")}
              type="checkbox"
              value="is_teleworking"
              className="lg:self-start lg:mt-1.5"
            />
          </div>

          <button
            className="w-fit mx-auto p-2 rounded-md bg-[#CA2060] text-white hover:bg-black lg:w-[10em]"
            type="submit"
          >
            Rechercher
          </button>
        </form>
      </section>

      <section className="flex w-10/12 mt-[8em] mx-auto">
        <ul className="flex flex-row flex-wrap gap-8 justify-center ">
          {offers.map((offer) => (
            <li
              key={offer.id}
              className="lg:flex lg:flex-col lg:gap-2 lg:w-1/6 border-solid border-2 border-[#CA2060] lg:p-1 hover:bg-slate-100"
            >
              {" "}
              <a href="/" className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">{offer.titre}</h1>
                <span>{offer.contract_type}</span>
                <span>{offer.description}</span>
                <span>Salaire: {offer.wage.toFixed(1)}€</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex w-10/12 mt-[8em] mx-auto">
        <ul className="flex flex-row flex-wrap gap-8 justify-center ">
          {filteredOffers.map((offer) => (
            <li
              key={offer.id}
              className="lg:flex lg:flex-col lg:gap-2 lg:w-1/6 border-solid border-2 border-[#CA2060] lg:p-1 hover:bg-slate-100"
            >
              {" "}
              <a href="/" className="flex flex-col gap-2">
                <h1 className="text-lg font-bold">{offer.titre}</h1>
                <span>{offer.contract_type}</span>
                <span>{offer.description}</span>
                <span>Salaire: {offer.wage.toFixed(1)}€</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
