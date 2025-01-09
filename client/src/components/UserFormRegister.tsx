import { useForm } from "react-hook-form";
import userIcone from "../assets/images/UserIcone.png";
import type { FormData } from "../lib/types";

function UserFormRegister() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  const onFormSubmit = handleSubmit((data) => console.log(data));

  return (
    <>
      <article className="flex flex-col items-center justify-center bg-red-100 w-full h-screen my-56">
        <h1 className="text-4xl font-bold text-white mb-6">Candidat</h1>
        <img
          className="w-24 mb-8"
          src={userIcone}
          alt="Icone de création de compte"
        />
        <form onSubmit={onFormSubmit} className="space-y-6">
          <section className="flex justify-center gap-6">
            <label htmlFor="lastName">
              Nom :
              <input
                {...register("lastName", {
                  required: "Le champ est requis",
                  minLength: {
                    value: 2,
                    message: "Le champ doit au moins contenir 2 caractères",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Le champ ne peut pas contenir plus de 30 caractères",
                  },
                })}
                type="text"
                id="lastName"
                className="rounded ml-1"
              />
              {typeof errors.lastName?.message === "string" && (
                <span className="text-red-500">{errors.lastName.message}</span>
              )}
            </label>
            <label htmlFor="firstName">
              Prénom :
              <input
                {...register("firstName", {
                  required: "Le champ est requis",
                  minLength: {
                    value: 2,
                    message: "Le champ doit au moins contenir 2 caractères",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Le champ ne peut pas contenir plus de 30 caractères",
                  },
                })}
                type="text"
                id="firstName"
                className="rounded ml-1"
              />
              {typeof errors.firstName?.message === "string" && (
                <span className="text-red-500">{errors.firstName.message}</span>
              )}
            </label>
          </section>
          <section>
            <label htmlFor="email">
              Adresse Mail :
              <input
                {...register("email", {
                  required: "Le champ est requis",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                    message: "Adresse email invalide",
                  },
                })}
                className="w-full py-2 rounded-lg"
                type="email"
                id="email"
              />
              {typeof errors.email?.message === "string" && (
                <span className="text-red-500">{errors.email.message}</span>
              )}
            </label>
          </section>
          <section>
            <label htmlFor="adress">
              Adresse (N°, rue) :
              <input
                {...register("adress", {
                  required: "Le champ est requis",
                })}
                type="text"
                id="adress"
                className="rounded w-80 h-20 ml-1"
              />
              {typeof errors.adress?.message === "string" && (
                <span className="text-red-500">{errors.adress.message}</span>
              )}
            </label>
          </section>
          <section className="flex justify-center gap-6">
            <label htmlFor="town">
              Ville :
              <input
                {...register("town", {
                  required: "Le champ est requis",
                  maxLength: {
                    value: 80,
                    message:
                      "Le champ ne peut pas contenir plus de 80 caractères",
                  },
                })}
                type="text"
                id="town"
                className="rounded ml-1"
              />
              {typeof errors.town?.message === "string" && (
                <span className="text-red-500">{errors.town.message}</span>
              )}
            </label>
            <label htmlFor="postCode">
              Code Postal :
              <input
                {...register("postCode", {
                  required: "Le champ est requis",
                  pattern: {
                    value: /^[0-9]{5}$/,
                    message: "Code postal incorrect",
                  },
                })}
                type="text"
                id="postCode"
                className="rounded ml-1"
              />
              {typeof errors.postCode?.message === "string" && (
                <span className="text-red-500">{errors.postCode.message}</span>
              )}
            </label>
          </section>
          <section className="flex justify-around">
            <label htmlFor="phoneNumber">
              Téléphone :
              <input
                {...register("phoneNumber", {
                  required: "Le champ est requis",
                  pattern: {
                    value: /^[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}$/,
                    message: "Numéro de téléphone invalide",
                  },
                })}
                type="tel"
                id="phoneNumber"
                className="rounded w-50 mr-9"
              />
              {typeof errors.phoneNumber?.message === "string" && (
                <span className="text-red-500">
                  {errors.phoneNumber.message}
                </span>
              )}
            </label>
            <button
              className="w-40 bg-red-500 text-white py-2 rounded-lg"
              type="button"
            >
              Ajouter un CV
            </button>
          </section>
          <section>
            <label htmlFor="password">
              Mot de passe :
              <input
                {...register("password", {
                  required: "Le champ est requis",
                  minLength: {
                    value: 6,
                    message:
                      "Le mot de passe doit contenir au moins 6 caractères",
                  },
                  maxLength: {
                    value: 30,
                    message:
                      "Le mot de passe ne peut pas contenir plus de 30 caractères",
                  },
                })}
                type="password"
                id="password"
                className="w-full py-2 rounded-lg"
              />
              {typeof errors.password?.message === "string" && (
                <span className="text-red-500">{errors.password.message}</span>
              )}
            </label>
          </section>
          <section>
            <label htmlFor="confirmPassword">
              Confirmez votre mot de passe :
              <input
                {...register("confirmPassword", {
                  required: "Le champ est requis",
                  validate: (value) => {
                    if (watch("password") !== value) {
                      return "Les mots de passe ne correspondent pas";
                    }
                  },
                })}
                type="password"
                id="confirmPassword"
                className="w-full py-2 rounded-lg"
              />
              {typeof errors.confirmPassword?.message === "string" && (
                <span className="text-red-500">
                  {errors.confirmPassword.message}
                </span>
              )}
            </label>
          </section>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Envoyer le formulaire
          </button>
        </form>
      </article>
    </>
  );
}

export default UserFormRegister;
