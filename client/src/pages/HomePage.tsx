import Connection from "../components/Connection";
import Main from "../components/Main";
import Carousel from "../components/Carousel/Carousel";
import Offers from "../components/Offers";

const HomePage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<Connection />
			<Main />
			<Offers />
			<Carousel />
		</div>
	);
};

export default HomePage;
