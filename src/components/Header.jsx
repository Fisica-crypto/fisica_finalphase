import { Link } from "react-router-dom";
import X from '../assets/projetilx.png';
import { useTheme } from "../hooks/use-theme";

import '../styles/Header.css';
 
export default function Header() {
    const colors = useTheme();

    return (
        <header className="header-container" style={{ background: colors.card }}>
            <div className="header-content">


                {/* CENTRO - Logo + Título */}
                <div className="header-center">
                    <img 
                        src={X} 
                        alt="Projétil X" 
                        className="header-logo"
                    />
                    <h1 style={{ color: colors.text }}>Lançamento Oblíquo</h1>
                </div>
            </div>
        </header>
    );
}