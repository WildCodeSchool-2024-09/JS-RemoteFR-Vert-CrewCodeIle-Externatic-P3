import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
