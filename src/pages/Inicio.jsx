import { Link } from 'react-router-dom';
import { InlineMath, BlockMath } from "react-katex";
import "katex/dist/katex.min.css";

import '../styles/Inicio.css'

import BarraLateral from '../components/Barralateral';

function Inicio(){
    return (  
        <>
        <BarraLateral/>
    <main>
        <section id = "apresentacao">{/* Aqui é os Boas Vindas para o usuário/Apresentação*/}
                <h2>Bem-vindo ao lugar onde a curiosidade encontra a ciência.</h2>
                <p>Explore o fascinante mundo do lançamento oblíquo, onde a física e a matemática se unem para revelar os segredos do movimento dos projéteis. 
                    Este simulador interativo é projetado para estudantes, educadores e entusiastas da ciência que desejam compreender melhor os princípios por trás do lançamento oblíquo e suas aplicações práticas.</p>
                <Link to='/Simulador' className='btn'>Acessar Simulador</Link>

        </section>

        <section id="teoria">{/* Teoria do Lançamento*/}

            <h2>Teoria por trás do Lançamento Obliquo</h2>
            <h3>O que é o Lançamento Oblíquo?</h3>
            <p>
            É um movimento que acontece em duas direções simultaneamente. O
            lançamento oblíquo é um movimento bidimensional (em duas dimensões)
            onde um objeto é lançado com velocidade inicial formando um ângulo (
            <InlineMath math={"\\theta"} />) entre{" "}
            <InlineMath math={"0^\\circ"} /> e{" "}
            <InlineMath math={"90^\\circ"} /> com a horizontal.
            </p>

            <p>Um projétil, ao ser lançado, retém um movimento horizontal uniforme 
                e constante, ao mesmo tempo em que adquire um movimento 
                vertical naturalmente acelerado para baixo.
            — Adaptado de "Diálogos sobre as Duas Novas Ciências", Galileu Galilei (1638).</p>
            
            <section id="componentes">{/* Componentes da Velocidade*/}
            <h3>Componentes da Velocidade:</h3>
            <p>O vetor velocidade é uma grandeza vetorial que representa a taxa de variação da 
                posição de um objeto, definindo seu módulo (rapidez), direção e sentido em um dado instante.
                No Lancamento Oblíquo, um objeto ao ser lançado, o vetor da velocidade inicial 
                <InlineMath math={'(V_0)'}/> se divide em dois eixos perpendiculares.</p>
            <ul>
        <li><strong>Horizontal 
            <InlineMath math={'(V_x)'}/>
            :</strong> Permanece constante durante todo o percurso. <br />
            <InlineMath math={' V_x = V_0 \\cdot \\cos(\\theta) '}/> </li>

        <li>
        <strong>
            Vertical (<InlineMath math={"V_y"} />):
        </strong>{" "}
            Altera-se devido à aceleração da gravidade (<InlineMath math={"g"} />). 
        <br />

        <InlineMath math={"V_{0y} = V_0 \\cdot \\sin(\\theta)"} />
        </li>
    </ul>
        </section>
        
        <section id="equacoes">{/* Equações do Lançamento*/}
            <h3>Equações do Lançamento Obliquo:</h3>
            <p>As equações que regem o movimento de um projétil lançado obliquamente são:</p>
            <ul>
                <li>
                    <strong>Posição Horizontal (x):</strong>
                    <BlockMath math={"x(t) = V_0 \\cdot \\cos(\\theta) \\cdot t"} />
                </li>

                <li>
                    <strong>Posição Vertical (y):</strong>
                    <BlockMath math={"y(t) = \\frac{V_0 \\cdot \\sin(\\theta) \\cdot {t} }{g} "} />
                </li>

                <li>
                    <strong>Alcance Máximo (R):</strong>
                    <BlockMath math={"R = 2 \\cdot V_0 \\cdot \\cos(\\theta) \\cdot {t}"} />
                </li>

                <li>
                    <strong>Altura Máxima (H):</strong>
                    <BlockMath math={"H = \\frac{V_0^2 \\cdot \\sin^2(\\theta)}{2g}"} />
                </li>   
                <li>
                    <strong>Tempo Total (t):</strong>
                    <BlockMath math={"t = \\frac{2 \\cdot V_0 \\cdot \\sin(\\theta)}{g}"} />
                </li>   
            </ul>

        </section>

         <section id="curiosidades">{/* Curiosidades sobre o Lançamento*/}
            <h3>Curiosidades sobre o Lançamento Obliquo:</h3>
            <ul>
                <li><strong>Aplicações Práticas:</strong> O lançamento oblíquo é fundamental em diversas áreas, como esportes (arremesso de dardos, lançamento de foguetes), engenharia (trajetória de projéteis) e até mesmo na exploração espacial.</li>
                <li><strong>Influência do Ângulo de Lançamento:</strong> O ângulo ideal para alcançar a máxima distância horizontal é de 
                 45° graus, assumindo que não há resistência do ar. No entanto, na prática, fatores como a resistência do ar e a altura do lançamento podem alterar esse valor.</li>
                <li><strong>História:</strong> O estudo do lançamento oblíquo remonta a Galileu Galilei, que foi um dos primeiros a analisar o movimento dos projéteis e estabelecer as bases da cinemática.</li>
            </ul>
            </section>

             <section id="simulacao">{/* Simulação do Lançamento*/}
            <h3>Simulação do Lançamento Obliquo:</h3>
            <p>Para visualizar o lançamento oblíquo, acesse nosso simulador interativo, onde você pode ajustar a velocidade inicial e o ângulo de lançamento para observar a trajetória do projétil em tempo real.</p>
            <Link to='/Simulador' className='btn'>Acesse nosso simulador</Link>
             </section>
        </section>
    </main>

   {/* Aqui ira ficar os créditos*/}
    <footer>
        <p>Desenvolvido por: grupo de estudantes</p>
        <p>Instituição: IFMA - Instituto Federal de Ciências e Tecnologias do Maranhão</p>
        <p>Ano: 2026</p>
    </footer>
        </>
    );
}
 
export default Inicio;