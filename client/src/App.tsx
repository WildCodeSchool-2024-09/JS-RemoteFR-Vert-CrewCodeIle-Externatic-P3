import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet />
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          transition={Bounce}
        />
      </main>
      <Footer />
    </>
  );
}
export default App;
