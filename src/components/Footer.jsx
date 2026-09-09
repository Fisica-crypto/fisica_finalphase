import React from "react";
import { useTheme } from "../hooks/use-theme";
import { FaEnvelope } from 'react-icons/fa';

import '../styles/Footer.css'

export default function Footer(){
    const colors = useTheme();
    return(
        <div className="Footer" style={{ background: colors.card }}>
            <div className="Footer-content" style={{ background: colors.card }}>
                
                <div className="titulo_icons" style={{ background: colors.card }}>
                    <h1 style={{ color: colors.text }}>Projétil X</h1>
                </div>
                
                <div className="referencias" style={{ background: colors.card }}>
                    {/* Coluna 1 */}
                    <div className="refs" style={{ background: colors.card }}>
                        <h3 style={{ color: colors.text }}>Participantes</h3>
                        <ul>
                            <li style={{ color: colors.text }}>Alexandre Antunes dos Santos</li>
                            <li style={{ color: colors.text }}>Arthur Lopes Conceição</li>
                            <li style={{ color: colors.text }}>Arthur Luigi Costa Barros</li>
                            <li style={{ color: colors.text }}>Bruno Soares Santos</li>
                            <li style={{ color: colors.text }}>Deyvid Gabriel Soares Santos</li>
                            <li style={{ color: colors.text }}>Guilherme Soares Silva</li>
                        </ul>
                    </div>

                    {/* Coluna 2 (Sem os <br> pra alinhar certinho) */}
                    <div className="refs" style={{ background: colors.card }} >
                        {/* Um título invisível só pra manter o alinhamento no PC */}
                        <h3 style={{ color: colors.card }}>.</h3> 
                        <ul>
                            <li style={{ color: colors.text }}>Gabriel Gomes Freitas</li>
                            <li style={{ color: colors.text }}>Isaac Samuel da Silva Guerdes</li>
                            <li style={{ color: colors.text }}>João Victor Oliveira Silva</li>
                            <li style={{ color: colors.text }}>Lourenço Silva Aguiar</li>
                            <li style={{ color: colors.text }}>Rihanna Byanca Gomes Lima Farias</li>
                            <li style={{ color: colors.text }}>Victor Gabriel De Sousa Dos Santos</li>
                        </ul>
                    </div>

                    {/* Coluna 3 */}
                    <div className="refs" style={{ background: colors.card }}>
                        <h3 style={{ color: colors.text }}>Coordenador do Projeto</h3>
                        <ul>
                            <li style={{ color: colors.text }}>Mestre Roberto Kennedy Cardoso</li>
                            <li style={{ color: colors.text }}>Dr. Francisco Cristiano da Silva Macedo</li>
                        </ul>
                    </div>

                    {/* Coluna 4 */}
                    <div className="refs" style={{ background: colors.card }}>
                        <h3 style={{ color: colors.text }}>Meios de contato</h3>
                        <ul>
                            <li style={{ color: colors.text }}>
                                <FaEnvelope/> <a href="mailto:fisicaprojeto98@gmail.com">Email: fisicaprojeto98@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}