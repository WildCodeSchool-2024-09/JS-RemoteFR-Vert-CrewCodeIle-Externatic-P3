import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { partnerLogos } from "./data";

import "swiper/css";
import "swiper/css/autoplay";

const Carousel = () => {
	return (
		<section
			id="partenaires"
			aria-label="Entreprises partenaires"
			className="py-12 bg-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<aside aria-label="Carrousel de logos d'entreprises partenaires">
					<div className="skip-link sr-only">
						<a href="#skip-slider-entreprises">
							Contourner le slider des entreprises partenaires
						</a>
					</div>

					<div className="space-y-8">
						<Swiper
							modules={[Autoplay]}
							spaceBetween={20}
							slidesPerView={6}
							loop={true}
							speed={3000}
							autoplay={{
								delay: 0,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
								reverseDirection: false,
							}}
							breakpoints={{
								320: { slidesPerView: 2 },
								640: { slidesPerView: 3 },
								768: { slidesPerView: 4 },
								1024: { slidesPerView: 6 },
							}}
							className="partner-carousel"
						>
							{partnerLogos.map((logo) => (
								<SwiperSlide key={`top-${logo.id}`}>
									<img
										width="265"
										height="122"
										src={logo.src}
										className="logo-partenaire w-full h-auto object-contain"
										alt={logo.alt}
										loading="lazy"
										srcSet={logo.srcset}
										sizes="(max-width: 265px) 100vw, 265px"
									/>
								</SwiperSlide>
							))}
						</Swiper>

						<Swiper
							modules={[Autoplay]}
							spaceBetween={20}
							slidesPerView={6}
							loop={true}
							speed={3000}
							autoplay={{
								delay: 0,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
								reverseDirection: true,
							}}
							breakpoints={{
								320: { slidesPerView: 2 },
								640: { slidesPerView: 3 },
								768: { slidesPerView: 4 },
								1024: { slidesPerView: 6 },
							}}
							className="partner-carousel"
						>
							{[...partnerLogos].reverse().map((logo) => (
								<SwiperSlide key={`bottom-${logo.id}`}>
									<img
										width="265"
										height="122"
										src={logo.src}
										className="logo-partenaire w-full h-auto object-contain"
										alt={logo.alt}
										loading="lazy"
										srcSet={logo.srcset}
										sizes="(max-width: 265px) 100vw, 265px"
									/>
								</SwiperSlide>
							))}
						</Swiper>
					</div>

					<div id="skip-slider-entreprises" />
				</aside>
			</div>
		</section>
	);
};

export default Carousel;
