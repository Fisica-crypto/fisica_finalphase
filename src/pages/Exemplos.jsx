import inicio1 from '../assets/Inicio1.png'
import inicio2 from '../assets/Inicio2.png'
import inicio3 from '../assets/Inicio3.png'
import simulador1 from '../assets/simulador1.png'
import sobre1 from '../assets/sobre1.png'
import '../styles/Exemplos.css'

export default function Obliquo() {
  return (
    <div className="corpo-exemplos">
      <h1>COMO USAR O NOSSO SITE</h1>

      <div className="card">
        <p>
          Este guia explica como utilizar cada funcionalidade do site para sobre o simulador 
          e entender o conteúdo de lançamento oblíquo.
        </p>
      </div>

    <div className="card">
      <h2>1. Inicio</h2>

      <div className="imagens-lado-a-lado">
        <img src={inicio1} alt="Tela de boas-vindas" className="imagem-exemplo-grid"/>
        <img src={inicio2} alt="Explicação do Lançamento Oblíquo" className="imagem-exemplo-grid"/>
        <img src={inicio3} alt="Equações do Lançamento Oblíquo" className="imagem-exemplo-grid"/>
      </div>

        <p>
        Contém uma breve introdução ao conteúdo de Física I sobre Lançamento Oblíquo, com os conceitos e fórmulas fundamentais (componentes da velocidade, equações de posição, alcance, altura máxima e tempo total).
        </p>
      </div>

      <div className="card">
        <h2>2. Simulador</h2>
        <img src={simulador1} alt="Tela Simulador" className="imagem-exemplo"/>
        <p>É a parte principal do site, onde você insere os dados para gerar a simulação do lançamento:</p>
        
        <ul>
          <li>Preencha o campo <strong>Velocidade inicial (m/s)</strong> com a velocidade desejada.</li>
          <li>Digite o <strong>Ângulo (Graus)</strong>, entre 0° e 90°.</li>
          <li>A <strong>Aceleração da Gravidade (m/s²)</strong> já vem preenchida com 10 (padrão da Terra), mas você pode alterar o valor se quiser simular outro cenário.</li>
          <li>Se quiser ver a posição em um instante específico, preencha o campo<strong>Tempo (s)</strong>.</li>
          <li>Clique em <strong>Calcular</strong> para gerar o gráfico da trajetória do projétil.</li>
          <li>Use o botão <strong>Reset</strong> para limpar os campos e começar uma nova simulação.</li>
        </ul>
      </div>

      <div className="card">
        <h2>3. Sobre Nós</h2>
        <img src={sobre1} alt="Nós" className="imagem-exemplo"/>
        <p>Esta página apresenta quem somos, o objetivo do projeto e a lista de alunos e professores envolvidos.</p>
      </div>

      <div className="card">
        <h2>Dicas</h2>
        <ul>
          <li>Use sempre valores positivos.</li>
          <li>O ângulo deve estar entre 0° e 90°.</li>
          <li>A gravidade padrão da Terra é 9,8 m/s² (o campo já vem com 10 como aproximação).</li>
          <li>Se a gravidade for definida como 0, o objeto segue em linha reta, pois não há força puxando-o para baixo.</li>
        </ul>
      </div>
    </div>
  );
}