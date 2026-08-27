import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";
import p5 from "p5";
 
const CORES = [
  [59, 130, 246],   // azul
  [234, 179, 8],    // amarelo
  [239, 68, 68],    // vermelho
  [34, 197, 94],    // verde
  [168, 85, 247],   // roxo
  [249, 115, 22],   // laranja
  [20, 184, 166],   // teal
  [236, 72, 153],   // rosa
];
 
// Margem interna do canvas (px)
const MARGIN_LEFT   = 20;
const MARGIN_RIGHT  = 20;
const MARGIN_TOP    = 20;
const MARGIN_BOTTOM = 20;
 
const Animation = forwardRef(function Animation(
  { velocidade, angulo, gravidade, restart },
  ref
) {
  const sketchRef   = useRef(null);
  const p5Instance  = useRef(null);
  const trajetorias = useRef([]);   // trajetórias concluídas
  const atual       = useRef(null); // trajetória em andamento
  const corIndex    = useRef(0);
 
  useImperativeHandle(ref, () => ({
    reset() {
      trajetorias.current = [];
      atual.current       = null;
      corIndex.current    = 0;
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
      iniciarP5();
    },
  }));
 
  // Calcula escala (px/m) para que TODAS as trajetórias caibam no canvas
  function calcularEscala(p, trajetos, atualRef) {
    const todos = [...trajetos];
    if (atualRef) todos.push(atualRef);
    if (todos.length === 0) return 20;
 
    let maxX = 0;
    let maxY = 0;
 
    todos.forEach((tr) => {
    
      const tempoTotal = (2 * tr.v0 * Math.sin(tr.angleRad)) / Math.max(tr.g, 0.001);
      const xFinal     = tr.v0 * Math.cos(tr.angleRad) * tempoTotal;
      const yMax       = (tr.v0 * tr.v0 * Math.sin(tr.angleRad) ** 2) / (2 * Math.max(tr.g, 0.001));
      if (xFinal > maxX) maxX = xFinal;
      if (yMax   > maxY) maxY = yMax;
    });
 
    const usableW = p.width  - MARGIN_LEFT - MARGIN_RIGHT;
    const usableH = p.height - MARGIN_TOP  - MARGIN_BOTTOM;
 
    if (maxX === 0 && maxY === 0) return 20;
 
    const escX = maxX > 0 ? usableW / maxX : Infinity;
    const escY = maxY > 0 ? usableH / maxY : Infinity;
    return Math.min(escX, escY, 80);
  }
 
  function iniciarP5() {
    if (!sketchRef.current) return;
 
    const sketch = (p) => {
      p.setup = () => {
        const w = sketchRef.current?.offsetWidth  || 800;
        const h = sketchRef.current?.offsetHeight || 420;
        p.createCanvas(w, h).parent(sketchRef.current);
        p.frameRate(60);
      };
 
      p.draw = () => {
        p.background(30, 34, 45);
 
        const escala = calcularEscala(p, trajetorias.current, atual.current);
        const chao   = p.height - MARGIN_BOTTOM;
 
        // Linha do chão
        p.stroke(80, 100, 120);
        p.strokeWeight(1.5);
        p.line(MARGIN_LEFT, chao, p.width - MARGIN_RIGHT, chao);
 
        // Trajetórias concluídas
        trajetorias.current.forEach((tr) => {
          desenharCurva(p, tr, escala, chao, false);
        });
 
        // Trajetória em andamento
        if (atual.current) {
          const tr = atual.current;
          const { v0, angleRad, g } = tr;
 
          const posX = v0 * Math.cos(angleRad) * tr.t;
          const posY = v0 * Math.sin(angleRad) * tr.t - 0.5 * g * tr.t * tr.t;
 
          if (!isNaN(posX) && !isNaN(posY)) {
            tr.pontos.push({ fx: posX, fy: Math.max(posY, 0) });
          }
 
          desenharCurva(p, tr, escala, chao, true);
 
          if (!tr.parado) tr.t += 0.04;
 
          if (posY <= 0 && tr.t > 0.1 && !tr.parado) {
            tr.parado = true;
            trajetorias.current.push({ ...tr, pontos: [...tr.pontos] });
            atual.current = null;
          }
        }
      };
    };
 
    p5Instance.current = new p5(sketch);
  }
 
  function desenharCurva(p, tr, escala, chao, comBola) {
    const [r, g2, b] = tr.cor;
 
    if (tr.pontos.length > 1) {
      p.stroke(r, g2, b, 220);
      p.strokeWeight(2.2);
      p.noFill();
      p.beginShape();
      tr.pontos.forEach((pt) => {
        p.vertex(MARGIN_LEFT + pt.fx * escala, chao - pt.fy * escala);
      });
      p.endShape();
    }
 
    if (comBola && tr.pontos.length > 0) {
      const ult = tr.pontos[tr.pontos.length - 1];
      const dx  = MARGIN_LEFT + ult.fx * escala;
      const dy  = chao - ult.fy * escala;
 
      // sombra no chão
      p.noStroke();
      p.fill(r, g2, b, 35);
      p.ellipse(dx, chao, 20, 7);
 
      // bola
      p.fill(r, g2, b);
      p.noStroke();
      p.circle(dx, dy, 14);
 
      // brilho
      p.fill(255, 255, 255, 130);
      p.circle(dx - 3, dy - 3, 5);
    }
 
    // ponto de pouso nas trajetórias finalizadas
    if (!comBola && tr.pontos.length > 0) {
      const ult = tr.pontos[tr.pontos.length - 1];
      const dx  = MARGIN_LEFT + ult.fx * escala;
      p.fill(r, g2, b, 180);
      p.noStroke();
      p.circle(dx, chao, 9);
    }
  }
 
  // Monta o p5 uma vez
  useEffect(() => {
    iniciarP5();
    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
        p5Instance.current = null;
      }
    };
  }, []);
 
  // Nova trajetória a cada "calcular"
  useEffect(() => {
    const v0  = Number(velocidade);
    const ang = Number(angulo);
    const g   = Number(gravidade);
 
    if (!v0 || !ang || isNaN(v0) || isNaN(ang) || v0 <= 0 || ang <= 0) return;
 
    const cor      = CORES[corIndex.current % CORES.length];
    corIndex.current += 1;
 
    atual.current = {
      v0,
      angulo: ang,
      angleRad: (ang * Math.PI) / 180,
      g,
      cor,
      t: 0,
      pontos: [],
      parado: false,
    };
  }, [restart]);
 
  return (
    <div
      ref={sketchRef}
      style={{
        backgroundColor: "#1e222d",
        width: "100%",
        height: "420px",
        borderRadius: "12px",
        overflow: "hidden",
      }}
    />
  );
});
 
export default Animation;