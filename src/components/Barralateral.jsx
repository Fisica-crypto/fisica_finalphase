import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/use-theme";

import '../styles/Siderbar.css' // (Cuidado: tá escrito Siderbar, se for Sidebar arruma aí no seu arquivo pra não dar erro!)

function BarraLateral() {
    const colors = useTheme();
    // No celular, é melhor que a barra comece fechada (false) para não tampar a tela de cara!
    const [aberta, setAberta] = useState(false);

    const fecharBarra = () => setAberta(false);

    return (
        <>
            {/* O Fundo Escuro (Overlay) que aparece quando a barra abre */}
            {aberta && (
                <div className="overlay-barra" onClick={fecharBarra}></div>
            )}

            {/* O Botão Hambúrguer */}
            <button
                className="meu-btn"
                style={{ backgroundColor: colors.tint, color: '#fff' }} 
                onClick={() => setAberta(!aberta)}
            >
                ☰
            </button>

            {/* A Barra Lateral */}
            <div className={`Body ${aberta ? "aberta" : "fechada"}`} style={{ backgroundColor: colors.card }}>
                <div className="Bar-container">

                    <div className="Top" style={{ backgroundColor: colors.card, borderBottomColor: colors.background }}>
                        <img src="https://imgs.search.brave.com/W4G6kU1IioffVGmnPRo05eCxUjaI3-rLtQHdu5qpUhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXR3/b3JrLmdydXBvYWJy/aWwuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy80/LzIwMTYvMDgvMTMx/LnBuZz9xdWFsaXR5/PTcw" alt="Logo" />
                        <h3 style={{ color: colors.text }}>Confira as outras páginas</h3>
                    </div>

                    <div className="Bottom" style={{ backgroundColor: colors.card }}>
                        <nav>
                            <ul className="navegacao">
                                <li><Link to="/" onClick={fecharBarra} style={{ color: colors.text }}>🏠 Inicio</Link></li>
                                <li><Link to="/Simulador" onClick={fecharBarra} style={{ color: colors.text }}>🚀 Simulador</Link></li>
                                <li><Link to="/Exemplos" onClick={fecharBarra} style={{ color: colors.text }}>❔ Como usar</Link></li>
                                <li><Link to="/Sobre" onClick={fecharBarra} style={{ color: colors.text }}>📃 Sobre</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BarraLateral;