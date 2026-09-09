import { BrowserRouter, Route, Routes } from "react-router-dom";

// Importamos o seu hook que acabamos de adaptar para a Web!
import { useTheme } from "./hooks/use-theme";

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
  // Chama o hook para pegar as cores do momento
  const colors = useTheme();

  return (
    // Essa div "abraça" o site todo. O 'minHeight: 100vh' garante que ela pegue a tela inteira.
    <div style={{ backgroundColor: colors.background, color: colors.text, minHeight: '100vh', transition: '0.3s' }}>
      <BrowserRouter>
        
        <Header />
        <BarraLateral />

        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Simulador" element={<Simulador />} />
          <Route path="/Altura" element={<Altura />} />
          <Route path="/Alcance" element={<Alcance />} />
          <Route path="/Tempo" element={<Tempo />} />
          <Route path="/Exemplos" element={<Obliquo />} />
          <Route path="/Sobre" element={<Sobre />}/>
        </Routes>

        <Footer />
        
      </BrowserRouter>
    </div>
  );
}