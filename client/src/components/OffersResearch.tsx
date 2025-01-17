import { SmileIcon, SquareMenu } from "lucide-react";
import { useEffect, useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { OffersDataType, SearchDataType } from "../lib/definition";

export default function OffersResearch() {
  const [isOpenMenu, setIsOpenedMenu] = useState(false);
  const [search, setSearch] = useState<string>("");
  // const [candidates, setCandidates] = useState<CandidateDataType[]>([]);
  const [offers, setOffers] = useState<OffersDataType[]>([]);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch("http://localhost:3310/api/offers");
        const data: OffersDataType[] = await response.json();
        setOffers(data);
      } catch (error) {
        console.error("Error fetching offers", error);
      }
    };

    fetchOffers();
  }, []); //

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchDataType>();
  const onSubmit: SubmitHandler<SearchDataType> = (data) => {
    console.info(data);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleIsOpenedMenu = () => {
    setIsOpenedMenu(!isOpenMenu);
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

        <div className="flex flex-col gap-4">
          <div className="flex justify-end">
            <button
              className="mr-6 lg:invisible"
              type="button"
              onClick={handleIsOpenedMenu}
            >
              <SquareMenu />
            </button>
          </div>

          {isOpenMenu && (
            <section className="flex flex-col gap-2 mr-2">
              <li className="list-none">
                <a href="/">Nos partenaires</a>
              </li>
              <li className="list-none">
                <a href="/">Nos offres d'emploi</a>
              </li>
              <li className="list-none">
                <a href="/">A propos</a>
              </li>
            </section>
          )}

          {/* Don't forget to replace smileIcon with candidate picture profile from DB */}
          <div className="lg:flex lg:gap-16">
            <SmileIcon />

            <div className="lg:flex lg:flex-col gap-2">
              <p className="mt-2">Nom Prénom </p>
              <button
                type="button"
                className="mt-2 h-10 mr-4 rounded-md p-2 border-solid border-2 border-[#CA2060] hover:border-black lg:bg-[#CA2060] lg:w-[16em] lg:text-white lg:hover:bg-black"
              >
                Mon compte
              </button>
            </div>
            <div className="mt-2 lg:self-center">
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="mr-12 w-9 h-5 lg:w-11 lg:h-6 bg-gray-200 hover:bg-gray-300 peer-focus:outline-0 peer-focus:ring-transparent rounded-full peer transition-all ease-in-out duration-500 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 lg:after:h-5 lg:after:w-5 after:transition-all peer-checked:bg-indigo-600 hover:peer-checked:bg-indigo-700" />
              </label>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-fit mx-auto mt-16 lg:mt-32">
        <form
          className="flex flex-col gap-8 lg:flex-row lg:gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col ">
            {errors.job_name && (
              <span className="text-lg font-bold">
                {errors.job_name.message}
              </span>
            )}
            <label htmlFor="job_name">Intitulé du poste:</label>
            <input
              id="job_name"
              {...register("job_name", {
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
            <label htmlFor="contractType">Type de contrat:</label>

            <div className="flex gap-2">
              <input {...register("permanent")} type="checkbox" value="CDI" />
              CDI
              <input {...register("partTime")} type="checkbox" value="CDD" />
              CDD
              <input
                {...register("internship")}
                type="checkbox"
                value="Alternance"
              />
              Alternance
            </div>
          </section>

          <div className="flex flex-col">
            <label htmlFor="location">Localisaton:</label>
            <input id="location" type="text" placeholder="Localisation..." />
          </div>

          <div className="flex flex-row">
            <label htmlFor="teleworking">Télétravail Souhaité :</label>
            <input
              id="teleworking"
              {...register("teleworking")}
              type="checkbox"
              value="teleworking"
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
              className="flex flex-col gap-2 w-1/6 border-solid border-2 border-[#CA2060] p-1 hover:bg-slate-100"
            >
              <h1 className="text-lg font-bold">{offer.titre}</h1>
              <span>{offer.contract_type}</span>
              <span>{offer.description}</span>
              <span>salaire: {offer.wage}€</span>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
