// import { useState } from "react";
// import type { CandidateDataType } from "../../lib/candidate.definition";

export default function profileCard() {
  // const [candidates, setCandidates] = useState<CandidateDataType[]>([]);

  return (
    <section className="mt-4 flex flex-col gap-4">
      <section className="lg:flex lg:gap-16">
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
  );
}
