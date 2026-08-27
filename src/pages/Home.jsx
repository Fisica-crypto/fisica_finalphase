import React, { useState, useRef } from "react";
import "../styles/Home.css";
import {
  calcularAlcance,
  calcularAlcanceNoTempo,
  calcularAltura,
  calcularAlturaNoTempo,
  calcularTempo,
} from "../utils/mov";
import Animation from "../components/Animation";
 
// Cores sincronizadas com Animation.jsx
const COR_LABELS = [
  "#3b82f6", "#eab308", "#ef4444", "#22c55e",
  "#a855f7", "#f97316", "#14b8a6", "#ec4899",
];
 
export default function Simulador() {
  const [velocidade, setVelocidade] = useState("");
  const [angulo,     setAngulo]     = useState("");
  const [gravidade,  setGravidade]  = useState(10);
  const [tempo,      setTempo]      = useState("");
 
  const [restart, setRestart] = useState(false);
  const [erro,    setErro]    = useState("");
 
  // último resultado (para o painel lateral)
  const [ultimo, setUltimo] = useState(null);
 
  // histórico completo (para o modal)
  const [historico,    setHistorico]    = useState([]);
  const [modalAberto,  setModalAberto]  = useState(false);
 
  // índice de cor atual (espelha o Animation)
  const corIndexRef = useRef(0);
 
  const animationRef = useRef(null);
  const zeroGrav = Number(gravidade) === 0;
 
  function calcular() {
    setErro("");
 
    if (velocidade === "" || angulo === "") {
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
    if (a <= 0 || a >= 91) {
      setErro("Ângulo deve estar entre 0 e 90");
      return;
    }
    if (v <= 0) {
      setErro("Velocidade deve ser maior que 0");
      return;
    }
 
    const tempoFoiDigitado = tempo !== "" && !isNaN(Number(tempo));
    let t = tempoFoiDigitado ? Number(tempo) : calcularTempo(v, a, g);
 
    if (t < 0) { setErro("Tempo não pode ser negativo"); return; }
 
    const tempoMaximo = calcularTempo(v, a, g);
    if (tempoFoiDigitado && t > tempoMaximo) {
      setErro(`O projétil já caiu! Tempo máximo: ${tempoMaximo.toFixed(2)}s`);
      return;
    }
 
    const al = tempoFoiDigitado
      ? calcularAlcanceNoTempo(v, a, t)
      : calcularAlcance(v, a, g);
    const h = tempoFoiDigitado
      ? calcularAlturaNoTempo(v, a, g, t)
      : calcularAltura(v, a, g);
 
    const cor = COR_LABELS[corIndexRef.current % COR_LABELS.length];
    corIndexRef.current += 1;
 
    const novoResultado = {
      id:         Date.now(),
      cor,
      velocidade: v,
      angulo:     a,
      gravidade:  g,
      tempo:      t.toFixed(2),
      alcance:    al.toFixed(2),
      altura:     h.toFixed(2),
    };
 
    setUltimo(novoResultado);
    setHistorico((prev) => [novoResultado, ...prev]);
    setRestart((prev) => !prev);
  }
 
  function resetar() {
    setHistorico([]);
    setUltimo(null);
    setErro("");
    corIndexRef.current = 0;
    if (animationRef.current) animationRef.current.reset();
  }
 
  return (
    <div className="corpo">
 
      {/* INPUTS  */}
      <div id="Request">
        <div className="input">
          <p>Velocidade Inicial (m/s)</p>
          <input type="number" value={velocidade}
            onChange={(e) => setVelocidade(e.target.value)} className="insert" />
        </div>
        <div className="input">
          <p>Ângulo (graus)</p>
          <input type="number" value={angulo}
            onChange={(e) => setAngulo(e.target.value)} className="insert" />
        </div>
        <div className="input">
          <p>Aceleração da Gravidade (m/s²)</p>
          <input type="number" value={gravidade}
            onChange={(e) => setGravidade(e.target.value)} className="insert" />
        </div>
        <div className="input">
          <p>Tempo (s)</p>
          <input type="number" value={tempo}
            onChange={(e) => setTempo(e.target.value)} className="insert" />
        </div>
 
        <div className="btn-group">
          <button onClick={calcular} className="btn-enviar">Calcular</button>
          <button onClick={resetar}  className="btn-reset">Reset</button>
        </div>
      </div>
 
      {erro && <p className="erro">{erro}</p>}
 
      {/* ANIMAÇÃO + PAINEL */}
      <div id="container-results">
 
        <div id="right">
          <Animation
            ref={animationRef}
            velocidade={Number(velocidade)}
            angulo={Number(angulo)}
            gravidade={Number(gravidade)}
            restart={restart}
          />
        </div>
 
        {/* PAINEL LATERAL — só o último resultado */}
        {zeroGrav ? (
          <div id="results-box">
            <h2>Resultados</h2>
            <p>⏱ Tempo: ∞</p>
            <p>📏 Alcance: ∞</p>
            <p>📈 Altura Máx: ∞</p>
          </div>
        ) : ultimo ? (
          <div id="results-box">
            <div className="results-header">
              <h2>Resultados</h2>
              {historico.length > 1 && (
                <button
                  className="btn-historico"
                  onClick={() => setModalAberto(true)}
                >
                  Histórico ({historico.length})
                </button>
              )}
            </div>
 
            {/* indicador de cor */}
            <div className="resultado-cor-row">
              <span
                className="cor-dot"
                style={{ background: ultimo.cor }}
              />
              <span className="cor-label">
                v₀ = {ultimo.velocidade} m/s · θ = {ultimo.angulo}°
              </span>
            </div>
 
            <div className="result-row"><span>⏱ Tempo</span>      <strong>{ultimo.tempo} s</strong></div>
            <div className="result-row"><span>📏 Alcance</span>    <strong>{ultimo.alcance} m</strong></div>
            <div className="result-row"><span>📈 Altura Máx</span> <strong>{ultimo.altura} m</strong></div>
          </div>
        ) : null}
      </div>
 
      {/* MODAL DE HISTÓRICO */}
      {modalAberto && (
        <div className="modal-overlay" onClick={() => setModalAberto(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Histórico de lançamentos</h2>
              <button className="modal-fechar" onClick={() => setModalAberto(false)}>✕</button>
            </div>
 
            <div className="modal-lista">
              {historico.map((item, idx) => (
                <div key={item.id} className="modal-item">
                  <div className="modal-item-titulo">
                    <span className="cor-dot" style={{ background: item.cor }} />
                    <span>
                      #{historico.length - idx} · v₀ = {item.velocidade} m/s · θ = {item.angulo}°
                      · g = {item.gravidade} m/s²
                    </span>
                  </div>
                  <div className="modal-item-valores">
                    <span>⏱ {item.tempo} s</span>
                    <span>📏 {item.alcance} m</span>
                    <span>📈 {item.altura} m</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}