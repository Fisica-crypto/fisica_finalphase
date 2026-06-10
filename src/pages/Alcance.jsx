import React, { useState } from "react";
import "../styles/alcance.css";
import { calcularAlcance } from "../utils/mov";

export default function Alcance() {
    const [velocidade, setVelocidade] = useState(20);
    const [angulo, setAngulo] = useState('');
    const [tempo, setTempo] = useState('')

    const [alcance, setAlcance] = useState(null);
    const [erro, setErro] = useState('');

    function lancarObj() {
        setErro('');
        setAlcance(null);

        // Parte das validações, para evitar letras ou não números e espaços vazios
        if (velocidade === '' || angulo === '') {
            setErro("Preencha todos os campos.");
            return;
        }

        if (isNaN(velocidade) || isNaN(angulo)) {
            setErro("Digite apenas números válidos.");
            return;
        }
        if (velocidade <= 0){
            setErro('A velocidade deve ser maior que zero.')
        } 
       //Recebe os valores e adicionas as casas decimais
        const resultado = CalAlcance(
            Number(velocidade),
            Number(angulo),
            Number(tempo),
        );

        setAlcance(resultado.toFixed(2));
    }

    return (
        <div className="corpo">
            <div className="Conteudo">
                <h1>Alcance</h1>

                <label>Velocidade (m/s)</label>
                <input
                    type="number"
                    placeholder="Digite a velocidade (m/s)"
                    value={velocidade}
                    min={0}
                    onChange={(e) => setVelocidade(e.target.value)}
                />

                <label>Ângulo (graus)</label>
                <input
                    type="number"
                    placeholder="Digite o ângulo"
                    value={angulo}
                    onChange={(e) => setAngulo(e.target.value)}
                />

                <label >Tempo</label>
                <div className="input">
                    <p>Tempo</p>
                    <input 
                        type="number" 
                        value={tempo}
                        onChange={(e)=>setTempo(e.target.value)}    
                    />
                </div>


                <button onClick={lancarObj}>Lançar</button>

                {erro && <p className="erro">{erro}</p>}

                {alcance !== null && (
                    <div className="resultado">
                        <h3>Resultado</h3>
                        <p>Alcance: {alcance} metros</p>
                    </div>
                )}
            </div>
        </div>
    );
}