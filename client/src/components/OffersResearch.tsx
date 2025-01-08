import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { SearchDataType } from "../lib/definition";

export default function OffersResearch() {
  const [search, setSearch] = useState<string>("");

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

  return (
    <>
      <section className="flex place-content-between">
        <img
          className="w-32"
          src="../src/assets/images/EXTERNATIC-LOGO-VERTICAL-RVB.png"
          alt="Externatic logo"
        />

        <button
          type="button"
          className="h-10 mr-4 mt-12 rounded-md p-2 border-solid border-2 border-[#CA2060] hover:border-black"
        >
          Mon compte
        </button>
      </section>
      <section className="flex w-fit mx-auto mt-16">
        <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col ">
            {errors.job_name && (
              <p className="text-lg font-bold">{errors.job_name.message}</p>
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

          <section className="flex flex-col gap-2">
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
            />
          </div>

          <button
            className="w-fit mx-auto p-2 rounded-md bg-[#CA2060] hover:text-white hover:bg-black"
            type="submit"
          >
            Rechercher
          </button>
        </form>
      </section>
    </>
  );
}
