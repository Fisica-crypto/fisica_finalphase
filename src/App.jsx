import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Alcance from "./pages/Alcance";
import Altura from "./pages/Altura";
import Tempo from "./pages/tempo";
import Inicio from "./pages/Inicio";
import Obliquo from "./pages/Exemplos";
import Sobre from "./pages/Sobre";
import Simulador from "./pages/Home";

import BarraLateral from './components/Barralateral';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <BarraLateral/>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Simulador" element={<Simulador />} />
        <Route path="/Altura" element={<Altura />} />
        <Route path="/Alcance" element={<Alcance />} />
        <Route path="/Tempo" element={<Tempo />} />
        <Route path="/Exemplos" element={<Obliquo />} />
        <Route path="/Sobre" element={<Sobre />}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}
