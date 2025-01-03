import logo from "../assets/images/EXTERNATIC-LOGO-ORIGINAL-RVB.png";

const NavBar = () => {
	return (
		<nav className="bg-white shadow-lg fixed w-full z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-20">
					<div className="flex items-center">
						<div id="accueil" className="flex-shrink-0 flex items-center">
							<img src={logo} alt="logo-externatic" className="h-10 w-auto" />
						</div>
						<div className="hidden md:ml-6 md:flex md:space-x-8">
							<a
								href="#partenaires"
								className="inline-flex items-center px-1 pt-1 text-gray-900"
							>
								Entreprises Partenaires
							</a>
							<a
								href="#nos-offres"
								className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
							>
								Nos offres d'emplois
							</a>
							<a
								href="#qui-sommes-nous"
								className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900"
							>
								A propos
							</a>
						</div>
					</div>
					<div className="hidden md:flex items-center">
						<button
							type="button"
							className="ml-8 px-4 py-2 rounded-md text-white bg-black hover:bg-gray-800"
						>
							Connexion Candidat
						</button>
					</div>
					<div className="hidden md:flex items-center">
						<button
							type="button"
							className="ml-8 px-4 py-2 rounded-md text-white bg-black hover:bg-gray-800"
						>
							Connexion Entreprise
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
