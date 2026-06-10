import { Link } from "react-router-dom";
import X from '../assets/projetilx.png';
import '../styles/Header.css';

export default function Header() {
    return (
        <header className="header-container">
            <div className="header-content">


                {/* CENTRO - Logo + Título */}
                <div className="header-center">
                    <img 
                        src={X} 
                        alt="Projétil X" 
                        className="header-logo"
                    />
                    <h1>Lançamento Oblíquo</h1>
                </div>
            </div>
        </header>
    );
}