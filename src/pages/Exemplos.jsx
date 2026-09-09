import inicio1 from '../assets/inicio1.png'
import inicio2 from '../assets/inicio2.png'
import inicio3 from '../assets/inicio3.png'
import simulador1 from '../assets/simulador1.png'
import sobre1 from '../assets/image.png'
import {useTheme}  from '../hooks/use-theme'

import '../styles/Exemplos.css'

export default function Obliquo() {
  const colors = useTheme()


  return (

    <div className="corpo-exemplos" style={{ Background: colors.background, color: colors.text }}>
     
      
      {/* O título h1, se estiver chumbado de preto no CSS, precisa da cor aqui também */}
      <h1 style={{ color: colors.text }}>COMO USAR NOSSO SITE</h1>

        {/* 4. Aplique a cor do CARD em cada div de card */}
        <div className="card" style={{ background: colors.card }}>
          <p style={{ color: colors.text }}>
            Este guia explica como utilizar cada funcionalidade do site...
          </p>
        </div>

        <div className="card" style={{ background: colors.card }}>
            <h2 style={{ color: colors.text }}>1. Inicio</h2>

              <div className="imagens-lado-a-lado">
                <img src={inicio1} alt="Tela de boas-vindas" className="imagem-exemplo-grid"/>
                <img src={inicio2} alt="Explicação do Lançamento Oblíquo" className="imagem-exemplo-grid"/>
                <img src={inicio3} alt="Equações do Lançamento Oblíquo" className="imagem-exemplo-grid"/>
              </div>

              <p style={{ color: colors.text }}>
              Contém uma breve introdução ao conteúdo de Física I sobre Lançamento Oblíquo, com os conceitos e fórmulas fundamentais (componentes da velocidade, equações de posição, alcance, altura máxima e tempo total).
              </p>
        </div>

        <div className="card" style={{ background: colors.card }}>
          <h2 style={{ color: colors.text }}>2. Simulador</h2>
          <img src={simulador1} alt="Tela Simulador" className="imagem-exemplo"/>
          <p style={{ color: colors.text }}>É a parte principal do site, onde você insere os dados para gerar a simulação do lançamento:</p>
          
          <ul style={{ color: colors.text }}>
            <li>Preencha o campo <strong>Velocidade inicial (m/s)</strong> com a velocidade desejada.</li>
            <li>Digite o <strong>Ângulo (Graus)</strong>, entre 0° e 90°.</li>
            <li>A <strong>Aceleração da Gravidade (m/s²)</strong> já vem preenchida com 10 (padrão da Terra), mas você pode alterar o valor se quiser simular outro cenário.</li>
            <li>Se quiser ver a posição em um instante específico, preencha o campo<strong>Tempo (s)</strong>.</li>
            <li>Clique em <strong>Calcular</strong> para gerar o gráfico da trajetória do projétil.</li>
            <li>Use o botão <strong>Reset</strong> para limpar os campos e começar uma nova simulação.</li>
          </ul>
        </div>

        <div className="card" style={{ background: colors.card, color: colors.text}} >
          <h2 style={{ color: colors.text }}>3. Sobre Nós</h2>
          <img src={sobre1} alt="Nós" className="imagem-exemplo"/>
          <p>Esta página apresenta quem somos, o objetivo do projeto e a lista de alunos e professores envolvidos.</p>
        </div>

        <div className="card" style={{ background: colors.card, color: colors.text}} >
          <h2 style={{ color: colors.text }}>Dicas</h2>
          <ul style={{ color: colors.text }}>
            <li>Use sempre valores positivos.</li>
            <li>O ângulo deve estar entre 0° e 90°.</li>
            <li>A gravidade padrão da Terra é 9,8 m/s² (o campo já vem com 10 como aproximação).</li>
            <li>Se a gravidade for definida como 0, o objeto segue em linha reta, pois não há força puxando-o para baixo.</li>
          </ul>
        </div>
    </div>
  );
}