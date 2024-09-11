import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import Services from "./components/Services";
import Contacto from "./components/Contacto";

function App() {
  const handleReservarClick = () => {
    setShowReservaForm(true);
  };
  return (
    <BrowserRouter>
      <Navbar />
      <Banner />
      <Services />
      <Contacto />
    </BrowserRouter>
  );
}

export default App;
