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
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("job_name", {
            required:
              "Nous n'avons trouvé aucune offre correspondant à votre recherche",
            pattern:
              /\b(S[EÉÈÊ]O Sp[eéèêë]cialiste|Sp[eéèêë]cialiste en marketing digital|Analyste de donn[éeèêë]s|Scientifique des donn[éeèêë]s|D[eéèêë]veloppeur Web|D[eéèêë]veloppeur Frontend|D[eéèêë]veloppeur Backend|D[eéèêë]veloppeur Fullstack|Designer UI\/UX|Chef de produit|Chef de projet|Ing[eéèêë]nieur DevOps|Analyste en cybers[éeèêë]curit[éeèêë]|Responsable de contenu|Responsable des m[éeèêë]dias sociaux|Sp[eéèêë]cialiste en e-commerce|D[eéèêë]veloppeur mobile|Ing[eéèêë]nieur en IA|Ing[eéèêë]nieur en apprentissage automatique|Architecte cloud|D[eéèêë]veloppeur blockchain)\b/i,
          })}
          type="search"
          placeholder="Rechercher un poste..."
          value={search}
          onChange={handleUserInput}
        />
        {errors.job_name && <p>{errors.job_name.message}</p>}
        <input {...register("permanent")} type="checkbox" value="CDI" />
        CDI
        <input {...register("partTime")} type="checkbox" value="CDD" />
        CDD
        <input {...register("internship")} type="checkbox" value="Alternance" />
        Alternance
        <button type="submit">Rechercher</button>
        <label htmlFor="location">Ville</label>
        <input id="location" type="text" placeholder="ville" />
      </form>
    </section>
  );
}
