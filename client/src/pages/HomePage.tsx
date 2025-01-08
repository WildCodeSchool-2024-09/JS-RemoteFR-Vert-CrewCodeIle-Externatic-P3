import About from "../components/About";
import SignUp from "../components/SignUp";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <SignUp />
      <About />
    </div>
  );
};

export default HomePage;
