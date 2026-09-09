import React from "react";
import "../styles/Sobre.css"
import { useTheme } from "../hooks/use-theme";

export default function Sobre() {
    const colors = useTheme();

    return(
        <div className="sobre-container" style={{ background: colors.background }} >
            <div className="meio" style={{ background: colors.background }}>
            <h1 style={{ color: colors.text }}>Seja Bem Vindo</h1>
            <p style={{ color: colors.text }}>Aqui você vai conhecer um pouco sobre nosso projeto</p>
            </div>

            <div className="content" style={{ background: colors.card, color: colors.text }}>
            <h2 style={{ color: colors.text }}>Quem somos nós?</h2>
            <p style={{ color: colors.text }}>Somos alunos do 3° ano do ensino médio do curso de informática, do IFMA - Campus Timon.</p>

            <h2 style={{ color: colors.text }}>Qual é o objetivo desse projeto?</h2>
            <p style={{ color: colors.text }}>O ProjetilX (nome dado pelos alunos) é um projeto sobre lançamento obliquo para o doutorado do professor Kennedy. Mas o principal objetivo é facilitar a aprendizagem, com testes e animações </p>

            <h3 style={{ color: colors.text }}>Alunos:</h3>
            <ul>
               <li style={{ color: colors.text }}>Alexandre Antunes dos Santos</li>
               <li style={{ color: colors.text }}>Arthur Lopes Conceição </li>
               <li style={{ color: colors.text }}>Arthur Luigi Costa Barros</li>
               <li style={{ color: colors.text }}>Bruno Soares Santos </li>
               <li style={{ color: colors.text }}>Deyvid Gabriel Soares Santos</li>
               <li style={{ color: colors.text }}>Guilherme Soares Silva</li>
               <li style={{ color: colors.text }}>Gabriel Gomes Freitas</li>
               <li style={{ color: colors.text }}>Isaac Samuel da Silva Guerdes</li>
               <li style={{ color: colors.text }}>João Victor Oliveira Silva</li>
               <li style={{ color: colors.text }}>Lourenço Silva Aguiar</li>
               <li style={{ color: colors.text }}>Rihanna Byanca Gomes Lima Farias </li>
               <li style={{ color: colors.text }}>Victor Gabriel De Sousa Dos Santos</li>
            </ul>

            <h3 style={{ color: colors.text }}>Professores:</h3>
            <ul>
                <li style={{ color: colors.text }}>Mestre Roberto Kennedy Cardoso</li>
                <li style={{ color: colors.text }}>Doutor Francisco Cristiano da Silva Macêdo</li>
            </ul>
            </div>
        </div>
    )
}