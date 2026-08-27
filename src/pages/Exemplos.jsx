import home from '../assets/Home.png'
import altura from '../assets/Altura.png'
import alcance from '../assets/Alcance.png'
import tempo from '../assets/Tempo.png'
import '../styles/Exemplos.css'

export default function Obliquo() {
  return (
    <div className="corpo-exemplos">
      <h1>Como usar o nosso site</h1>

      <div className="card">
        <p>
          Este guia explica como utilizar cada funcionalidade do site para sobre o simulador 
          e entender o conteúdo de lançamento oblíquo.
        </p>
      </div>

      <div className="card">
        <h2>1. Inicio</h2>
        <img src={home} alt="Tela inicial do site" className="imagem-exemplo"/>

        <p>
          Contém uma breve explicação, uma introdução do conteúdo de fisíca I, Lançamento Obliqueo. Contém os conceitos e fórmulas.
        </p>

      </div>

      <div className="card">
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

      <div className="card">
        <h2>3. Sobre Nós</h2>
        <img src={alcance} alt="Nós" className="imagem-exemplo"/>
        <p>Esta página fornece as informações sobre os partipantes do projeto, da criação desse site.</p>
      </div>

      <div className="card">
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