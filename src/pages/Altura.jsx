import { useState } from "react";
import {calcularAltura} from "../utils/mov";
import "../styles/Altura.css";

export default function Altura() {
  const [velocidade, setVelocidade] = useState("");
  const [angulo, setAngulo] = useState("");
  const [gravidade, setGravidade] = useState("");     // começa vazio
  const [altura, setAltura] = useState(null);
  const [tempo, setTempo] = useState("")
  const [erro, setErro] = useState("");

  function LancarObj(){
    setErro('');
      if (angulo === '') return;
    
      const resultado = CalAltura(
             Number(velocidade),
             Number(angulo),
             Number(gravidade),
             Number(tempo),
         );
    
    setAltura(resultado.toFixed(2))
  }

  return (
    <div className="container">
      <h2>Altura Máxima do Lançamento Oblíquo</h2>

      <input
        type="number"
        placeholder="Velocidade inicial (m/s)"
        value={velocidade}
        onChange={(e) => setVelocidade(e.target.value)}
      />

      <input
        type="number"
        placeholder="Ângulo (graus)"
        value={angulo}
        onChange={(e) => setAngulo(e.target.value)}
      />

      <input
        type="number"
        placeholder="Gravidade g (m/s²) - Digite o valor desejado"
        value={gravidade}
        onChange={(e) => setGravidade(e.target.value)}
        step="0.01"
      />

      <input 
        type="number" 
        placeholder="Tempo (m/s)"
        value={tempo}
        onChange={(e)=>setTempo(e.target.value)}    
      />

      <button onClick={LancarObj}>Calcular</button>

      {erro && <p className="erro">{erro}</p>}

      {altura !== null && !erro && (
        <p className="resultado">
          <strong>Altura Máxima:</strong> {altura} m
        </p>
      )}
    </div>
  );
}