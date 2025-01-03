import { useEffect, useState } from "react";
import logoOffres from "../assets/images/logo_offres_emp.png";

const Offers = () => {
	const [imageCount, setImageCount] = useState(6);

	useEffect(() => {
		const updateImageCount = () => {
			const width = window.innerWidth;
			if (width < 768) {
				setImageCount(4);
			} else {
				setImageCount(6);
			}
		};
		updateImageCount();
		window.addEventListener("resize", updateImageCount);
		return () => {
			window.removeEventListener("resize", updateImageCount);
		};
	}, []);

	return (
		<section
			id="nos-offres"
			className="py-10 m-10 rounded-md"
			style={{ backgroundColor: "#851342" }}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="lg:text-center">
					<h2 className="text-3xl text-center font-extrabold text-white sm:text-4xl">
						Nos offres
					</h2>
				</div>

				<div className="mt-16">
					<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
						{Array.from({ length: imageCount }).map((_, index) => (
							<div
								key={index}
								className="relative h-32 bg-cover bg-center"
								style={{
									backgroundImage: `url(${logoOffres})`,
								}}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Offers;
