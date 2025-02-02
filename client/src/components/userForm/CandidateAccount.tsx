import { useForm } from "react-hook-form";
import type { CandidateFormData } from "../../lib/userForm.definitions";

type CandidateFormType = {
  onSubmit: (data: CandidateFormData) => void;
};

function CandidateAccount({ onSubmit }: CandidateFormType) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CandidateFormData>();

  return (
    <section>
      <h2>Mon compte</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="photo">
          Photo de profil :
          <input
            type="file"
            id="photo"
            accept=".jpg,.png,.jpeg"
            {...register("photo")}
          />
        </label>
        {errors.photo && (
          <span className="text-red-300">{errors.photo.message}</span>
        )}

        <label htmlFor="cv">
          CV (PDF) :
          <input type="file" id="cv" accept=".pdf" {...register("cv")} />
        </label>
        {errors.cv && <span className="text-red-300">{errors.cv.message}</span>}

        <section>
          <p>Reconnaissance travailleur handicapé ?</p>
          <label htmlFor="is_disabled_true">
            <input
              type="radio"
              id="is_disabled_true"
              value="1"
              {...register("is_disabled", { required: "Ce champ est requis." })}
            />{" "}
            Oui
          </label>

          <label htmlFor="is_disabled_false">
            <input
              type="radio"
              id="is_disabled_false"
              value="0"
              defaultChecked
              {...register("is_disabled")}
            />{" "}
            Non
          </label>
        </section>
        {errors.is_disabled && (
          <span className="text-red-300">{errors.is_disabled.message}</span>
        )}

        <button type="submit">Mettre à jour mon profil</button>
      </form>
    </section>
  );
}

export default CandidateAccount;
