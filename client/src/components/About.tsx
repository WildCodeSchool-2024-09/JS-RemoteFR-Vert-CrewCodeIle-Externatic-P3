import { Clock, Target, Trophy, Users } from "lucide-react";

const About = () => {
  return (
    <main className="flex-grow">
      <section
        id="qui-sommes-nous"
        className="py-10 m-10 rounded-md section-primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Qui sommes-nous ?
            </h2>
            <p className="mt-4 text-lg text-white">
              Notre expertise au service de vos recrutements IT
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  icon: Users,
                  title: "Expertise IT",
                  description:
                    "En tant qu’expert du recrutement informatique, Externatic est là pour mieux vous connaître et pour vous guider dans vos choix.",
                },
                {
                  icon: Target,
                  title: "Accompagnement",
                  description:
                    "Vous accompagner, vous conseiller et vous aiguiller. Tel est notre métier.",
                },
                {
                  icon: Clock,
                  title: "Réactivité",
                  description:
                    "Les connexions que nous tissons, nous les entretenons sur la durée.",
                },
                {
                  icon: Trophy,
                  title: "Résultats",
                  description:
                    "Nous sommes acteurs de l’écosystème tech local, et nous nous appuyons sur un réseau riche d’expériences et d’expertises.",
                },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="flex justify-center">
                    <feature.icon className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="mt-6 text-lg font-medium text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-white">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="nos-services"
        className="py-10 m-10 rounded-md section-primary"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl text-center font-extrabold text-white sm:text-4xl">
              Nos services
            </h2>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
              {[
                {
                  title: "Au succès",
                  description:
                    "Nous fonctionnons “sans engagement”. Aucun candidat = pas d’acompte à verser",
                },
                {
                  title: "Aucune exclusivité",
                  description:
                    "Priorité à la satisfaction client : pleine liberté dans vos décisions d’accompagnement & partenariat.",
                },
                {
                  title: "Garantie 1ʳᵉ période d'essai",
                  description:
                    "Nous nous engageons durant cette période à retrouver un profil similaire à votre besoin sans frais supplémentaire.",
                },
                {
                  title: "Cherchons LE bon candidat",
                  description:
                    "Notre force réside dans notre réseau local, soutenu par nos engagements et cooptations.",
                },
              ].map((service) => (
                <div
                  key={service.title}
                  className="relative p-8 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-medium text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
