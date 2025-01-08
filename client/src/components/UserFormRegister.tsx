import userIcone from "../assets/images/UserIcone.png";

function UserFormRegister() {
  return (
    <>
      <article className="flex flex-col items-center justify-center bg-red-100 w-full h-screen  my-56">
        <h1 className="text-4xl font-bold text-white mb-6">Candidat</h1>
        <img
          className="w-24 mb-8"
          src={userIcone}
          alt="Icone de création de compte"
        />
        <form className="space-y-6 ">
          <section className="flex justify-center gap-6">
            <label>
              Nom :
              <input type="text" className="rounded ml-1" />
            </label>
            <label>
              Prénom:
              <input type="text" className="rounded ml-1" />
            </label>
          </section>
          <section className="">
            <label>
              Adresse Mail :
              <input className="w-full py-2 rounded-lg" type="email" />
            </label>
          </section>
          <section>
            <label>
              Adresse Postale :
              <input type="text" className="rounded w-80 h-20 ml-1" />
            </label>
          </section>
          <section className="flex justify-center gap-6">
            <label>
              Ville :
              <input type="text" className="rounded ml-1" />
            </label>
            <label>
              Code Postale :
              <input type="text" className="rounded ml-1" />
            </label>
          </section>
          <section className="flex justify-around">
            <label>
              Téléphone :
              <input type="tel" className="rounded w-50 mr-9" />
            </label>
            <button
              className="w-40 bg-red-500 text-white py-2 rounded-lg"
              type="submit"
            >
              Ajouter un CV
            </button>
          </section>
          <section>
            <label className="">
              Mot de passe :
              <input
                type="password"
                name=""
                id=""
                className="w-full py-2 rounded-lg"
              />
            </label>
          </section>
          <section>
            <label>
              Confirmer votre mot de passe :
              <input
                type="password"
                name=""
                id=""
                className="w-full py-2 rounded-lg "
              />
            </label>
          </section>
        </form>
      </article>
    </>
  );
}

export default UserFormRegister;
