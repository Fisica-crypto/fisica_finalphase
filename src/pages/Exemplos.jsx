import home from '../assets/Home.png'
import alcance from '../assets/Alcance.png'
import { useTheme } from '../hooks/use-theme';

import '../styles/Exemplos.css'

export default function Obliquo() {
  const colors = useTheme();

  return (
    <div className="corpo-exemplos" style={{ Background: colors.background, color: colors.text }}>
      
      {/* O título h1, se estiver chumbado de preto no CSS, precisa da cor aqui também */}
      <h1 style={{ color: colors.text }}>Como usar o nosso site</h1>

      {/* 4. Aplique a cor do CARD em cada div de card */}
      <div className="card" style={{ cards: colors.card }}>
        <p style={{ color: colors.text }}>
          Este guia explica como utilizar cada funcionalidade do site...
        </p>
      </div>
      <div className="card" style={{ cards: colors.background, color: colors.text}} >
        <h2>1. Inicio</h2>
        <img src={home} alt="Tela inicial do site" className="imagem-exemplo"/>

        <p>
          Contém uma breve explicação, uma introdução do conteúdo de fisíca I, Lançamento Obliqueo. Contém os conceitos e fórmulas.
        </p>

      </div>

      <div className="card" style={{ cards: colors.background, color: colors.text}} >
        <h2>3. Simulador</h2>
        <img src={alcance} alt="Tela Alcance" className="imagem-exemplo"/>
        <p>Parte principal do nosso site, é onde colocamos todos os dados necessários para calcular e realizar uma simulação dos lançamentos.</p>
        
        <ul>
          <li><strong>Velocidade inicial:</strong> m/s</li>
          <li><strong>Ângulo:</strong> graus</li>
          <li><strong>Gravidade:</strong> 9,8 m/s²</li>
          <li><strong>Tempo:</strong> Segundos</li>
        </ul>
      </div>

      <div className="card" style={{ cards: colors.background, color: colors.text}} >
        <h2>3. Sobre Nós</h2>
        <img src={alcance} alt="Nós" className="imagem-exemplo"/>
        <p>Esta página fornece as informações sobre os partipantes do projeto, da criação desse site.</p>
      </div>

      <div className="card" style={{ cards: colors.background, color: colors.text}} >
        <h2>Dicas</h2>
        <ul>
          <li>Use valores positivos</li>
          <li>Ângulos entre 0° e 90°</li>
          <li>Gravidade padrão: 9,8 m/s²
          <li>Ao definir a gravidade como 0, o objeto segue em linha reta já que não há uma força contrária para que o objeto caia.</li>
          </li>
        </ul>
      </div>
    </div>
  );
}