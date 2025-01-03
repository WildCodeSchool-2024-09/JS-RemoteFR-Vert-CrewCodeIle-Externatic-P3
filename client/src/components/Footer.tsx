import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import footerImage from "../assets/images/Footer.png";
import logo from "../assets/images/externatic_logo.png";

const Footer = () => {
	return (
		<footer style={{ backgroundColor: "#1e1e1e" }}>
			<div className="max-w-8xl mx-auto py-12 px-4 sm:px-6 lg:px-1">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="flex justify-center md:justify-start">
						<img
							className="w-[100%] mx-auto py-2 px-1 sm:p-0 sm:mt-0 sm:mb-0 lg:px-1"
							src={footerImage}
							alt="signature externatic"
						/>
					</div>

					<div className="flex flex-col items-center">
						<img
							className="max-w-[100%] mx-auto py-12 px-1 sm:p-0 sm:mt-0 lg:px-1"
							src={logo}
							alt="logo externatic"
						/>
						<p className="mt-4 mx-auto text-gray-400 text-sm">02 85 52 26 33</p>

						<div className="mt-4 flex space-x-6 justify-center">
							<a
								href="https://www.facebook.com/externatic"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<Facebook className="h-6 w-6" />
							</a>
							<a
								href="https://x.com/Externatic/status/1830588984965390769?mx=2"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<Twitter className="h-6 w-6" />
							</a>
							<a
								href="https://fr.linkedin.com/company/externatic"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<Linkedin className="h-6 w-6" />
							</a>
							<a
								href="https://www.instagram.com/externatic/"
								target="_blank"
								rel="noreferrer"
								className="text-gray-400 hover:text-white"
							>
								<Instagram className="h-6 w-6" />
							</a>
						</div>
					</div>

					<div className="flex justify-center md:justify-end md:col-span-1">
						<div className="text-center md:text-right">
							<h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
								Navigation
							</h3>
							<ul className="mt-4 space-y-4">
								<li>
									<a
										href="#connexion"
										className="text-base text-gray-300 hover:text-white"
									>
										Accueil
									</a>
								</li>
								<li>
									<a
										href="#qui-sommes-nous"
										className="text-base text-gray-300 hover:text-white"
									>
										Qui sommes-nous ?
									</a>
								</li>
								<li>
									<a
										href="#nos-services"
										className="text-base text-gray-300 hover:text-white"
									>
										Nos services
									</a>
								</li>
								<li>
									<a
										href="#nos-offres"
										className="text-base text-gray-300 hover:text-white"
									>
										Nos Offres
									</a>
								</li>
								<li>
									<a
										href="#partenaires"
										className="text-base text-gray-300 hover:text-white"
									>
										Entreprises partenaires
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-8 border-t border-gray-700 pt-8">
					<p className="text-base text-gray-400 text-center">
						© 2025 WCS Externatic. Tous droits réservés.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
