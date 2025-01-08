import { Outlet } from "react-router-dom";
import "./App.css";
import "./index.css";
import OffersResearchPage from "./pages/OffersResearchPage";

function App() {
  return (
    <main>
      <Outlet />
      <OffersResearchPage />
    </main>
  );
}
export default App;
