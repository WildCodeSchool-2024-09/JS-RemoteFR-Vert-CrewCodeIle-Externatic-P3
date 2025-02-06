import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { OffersDataType } from "../../lib/offers.definitions";
import type { SearchDataType } from "../../lib/search.definition";

type handleFilteredOffersType = {
  handleFilteredOffers: (search: SearchDataType) => void;
  filteredOffers: OffersDataType[];
  error: string | null;
};

export default function OffersResearch({
  handleFilteredOffers,
  filteredOffers,
  error,
}: handleFilteredOffersType) {
  const [search, setSearch] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchDataType>();
  const onSubmit: SubmitHandler<SearchDataType> = (
    searchData: SearchDataType,
  ) => {
    handleFilteredOffers(searchData);
  };

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const navigate = useNavigate();
  const handleOfferDetails = () => {
    navigate("/OfferDetails");
  };

  return (
    <section>
      <section className="flex justify-end">
        <button
          type="button"
          className="mt-4 h-10 mr-4 rounded-md p-2 border-solid border-2 border-[#CA2060] hover:border-black lg:bg-[#CA2060] lg:w-[16em] lg:text-white lg:hover:bg-black"
        >
          Mon compte
        </button>
      </section>

      <section className="flex w-fit mx-auto mt-16 lg:mt-32">
        <form
          className="flex flex-col gap-8 lg:flex-row lg:gap-12"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col ">
            {errors.title && (
              <span className="text-lg font-bold">{errors.title.message}</span>
            )}
            <label htmlFor="title">Intitulé du poste:</label>
            <input
              id="title"
              {...register("title", {
                required: "Veuillez sélectionner un titre de poste",
                pattern: /[a-zA-Z]/,
              })}
              type="search"
              placeholder="Rechercher un poste..."
              value={search}
              onChange={handleUserInput}
            />
          </div>

          <section className="flex flex-col">
            {errors.contract_type && (
              <span className="text-lg font-bold">
                {errors.contract_type.message}
              </span>
            )}
            <label htmlFor="contract_type">Type de contrat:</label>

            <div className="flex gap-2">
              <input
                {...register("contract_type", {
                  required: "Veuillez selectionner un type de contrat",
                })}
                type="radio"
                value="CDI"
              />
              CDI
              <input
                {...register("contract_type", {
                  required: "Veuillez selectionner un type de contrat",
                })}
                type="radio"
                value="CDD"
              />
              CDD
              <input
                {...register("contract_type", {
                  required: "Veuillez selectionner un type de contrat",
                })}
                type="radio"
                value="Alternance"
              />
              Alternance
            </div>
          </section>

          <div className="flex flex-col">
            {errors.location && (
              <span className="text-lg font-bold">
                {errors.location.message}
              </span>
            )}
            <label htmlFor="location">Localisaton:</label>
            <input
              {...register("location", {
                required: "Veuillez sélectionner une localisation",
              })}
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
      {error && <span>error.message</span>}
      <section className="flex w-10/12 mt-[8em] mb-[8em] mx-auto">
        <ul className="flex flex-row flex-wrap gap-8 justify-center ">
          {filteredOffers.length > 0 &&
            filteredOffers.map((offer) => (
              <li
                key={offer.id}
                className="p-1 flex flex-col gap-2 lg:flex lg:flex-col lg:gap-2 lg:w-1/3 border-solid border-2 border-primary lg:p-1 hover:bg-slate-100"
              >
                {" "}
                <h1 className="text-lg font-bold">{offer.title}</h1>
                <span>{offer.contract_type}</span>
                <span>{offer.description}</span>
                <span>Salaire: {offer.wage.toFixed(1)}€</span>
                <button
                  type="button"
                  className="p-2 bg-primary text-white rounded-md w-1/3"
                  onClick={handleOfferDetails}
                >
                  Voir l'offre
                </button>
              </li>
            ))}
        </ul>
      </section>
    </section>
  );
}
