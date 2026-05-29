import React, { useState } from "react";
import "../styles/Home.css";
import { calcularAlcance, calcularAlcanceNoTempo, calcularAltura, calcularAlturaNoTempo, calcularTempo } from "../utils/mov";
import Animation from "../components/Animation";

export default function Simulador(){
    
    const [velocidade, setVelocidade] = useState("");
    const [angulo, setAngulo] = useState("");
    const [gravidade, setGravidade] = useState(10);
    
    const [tempo, setTempo] = useState('');
    const [tempoCalculado, setTempoCalculado] = useState(null);
    const [alcance, setAlcance] = useState(null);
    const [altura, setAltura] = useState(null);
    
    const [restart, setRestart] = useState(false);
    const [erro, setErro] = useState("");
    
    const zeroGrav = Number(gravidade) === 0;

    function calcular(){
        
        setErro("");

        if(velocidade === "" || angulo === ""){
            setErro("Preencha velocidade e ângulo");
            return;
        }

        const v = Number(velocidade);
        const a = Number(angulo);
        const g = Number(gravidade);
        
        if (isNaN(v) || isNaN(a) || isNaN(g)) {
            setErro("Digite apenas números válidos");
            return;
}
        
        if(a <= 0 || a >= 91){
            setErro("Ângulo deve estar entre 0 e 90");
            return;
        }
        
        if(v <= 0 ){
            setErro("Velocidade e gravidade devem ser maiores que 0");  
            return;
        }

        const tempoFoiDigitado = tempo !== '' && ! isNaN(Number(tempo));
         let t = tempoFoiDigitado ? Number(tempo) : calcularTempo(v, a, g);
        
        if ( t < 0) {
            setErro("Tempo não pode ser negativo")
            return;
        }

        const tempoMaximo = calcularTempo(v, a, g);
        if(tempoFoiDigitado && t > tempoMaximo){
            setErro(`O projétil já caiu! Tempo máximo de voo: ${tempoMaximo.toFixed(2)}s`);
            return;
        }

        
        const al = tempoFoiDigitado
            ? calcularAlcanceNoTempo(v, a, t)
            : calcularAlcance(v, a, g);
        const h = tempoFoiDigitado
            ? calcularAlturaNoTempo(v, a, g, t)
            : calcularAltura(v, a, g);

        console.log("tempoFoiDigitado:", tempoFoiDigitado);
        console.log("t:", t, "v:", v, "a:", a, "g:", g);
        console.log("h calculado:", h);

        setTempoCalculado(t.toFixed(2));
        setAlcance(al.toFixed(2));
        setAltura(h.toFixed(2));

        setRestart(prev => !prev);
    }

    return(
        <div className="corpo">

            {/* INPUTS */}
            <div id="Request">

                <div className="input">
                    <p>Velocidade Inicial (m/s)</p>
                    <input
                        type="number"
                        value={velocidade}
                        onChange={(e)=>setVelocidade(e.target.value)}
                        className="insert"
                    />
                </div>

                <div className="input">
                    <p>Ângulo (graus)</p>
                    <input
                        type="number"
                        value={angulo}
                        onChange={(e)=>setAngulo(e.target.value)}
                        className="insert"
                    />
                </div>

                <div className="input">
                    <p> Aceleração da Gravidade (m/s²)</p>
                    <input
                        type="number"
                        value={gravidade}
                        onChange={(e)=>setGravidade(e.target.value)}
                        className="insert"
                    />
                </div>

                <div className="input">
                    <p> Tempo (s)</p>
                    <input 
                        type="number"
                        value={tempo}
                        onChange={(e)=>setTempo(e.target.value)}
                        className="insert" 
                    />
                </div>
                
                <button onClick={calcular} className="btn-enviar">
                    Calcular
                </button>
            </div>

            {erro && <p className="erro">{erro}</p>}

            {/* RESULTADOS + ANIMAÇÃO */}
            <div id="container-results">

                <div id="right">
                    <Animation
                        velocidade={Number(velocidade)}
                        angulo={Number(angulo)}
                        gravidade={Number(gravidade)}
                        tempo={Number(tempo)}
                        restart={restart}
                    />
                </div>

                {/* RESULTADOS FIXOS (SEM MODAL) */}
                {zeroGrav ? (
                    <div id="results-box">
                        <h2>Resultados</h2>
                        <p>⏱Tempo: Infinito(∞)</p>   
                        <p>📏Alcance: Infinito(∞)</p>
                        <p>📈Altura Máx: Infinito(∞)</p>
                    </div>
                ) : tempoCalculado && (
                    <div id="results-box">
                        <h2>Resultados</h2>
                        <p>⏱ Tempo: {tempo} s</p>
                        <p>📏 Alcance: {alcance} m</p>
                        <p>📈 Altura Máx: {altura} m</p>
                    </div>
                )}

            </div>

        </div>
    );
}