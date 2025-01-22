import { useForm } from "react-hook-form";
import type { CandidateFormData } from "../lib/types";

type CandidateFormRegisterType = {
  onSubmit: (data: CandidateFormData) => void;
};

function CandidateFormRegister({ onSubmit }: CandidateFormRegisterType) {
  const { register, handleSubmit } = useForm<CandidateFormData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <article>
        <label htmlFor="is_disabled">
          Souffrez-vous d'un handicap ?
          <input
            {...register("is_disabled")}
            type="radio"
            name="is_disabled"
            id="is_disabled_true"
            value="1"
          />
          Oui
          <input
            {...register("is_disabled")}
            type="radio"
            name="is_disabled"
            id="is_disabled_false"
            value="0"
            defaultChecked
          />
          Non
        </label>
      </article>
      <article>
        <button type="button">Ajouter une photo</button>
        <button
          className="w-40 bg-red-500 text-white py-2 rounded-lg"
          type="button"
        >
          Ajouter un CV
        </button>
      </article>
    </form>
  );
}

export default CandidateFormRegister;
