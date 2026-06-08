import React from "react";
import '../styles/Siderbar.css'

function BarraLateral(){
    return ( 
        <>
        <div className="Body">
            {/*Estrutura vai ficar assim, Imagem > texto > Navegação */}
            {/*A imagem vai ter um pequeno degradê com a parte de baixo da barra, a parte do "fundo". */}
            {/*O texto vai estar alinhado ao lado esquerdo(igual a barra, a esquerda), em cinza ou branco com destaque da borda embaixo 
            daquela div pra mostrar uma pequena separação */}
            {/*A navegação tera emojis ao lado dos nomes, referente a página, ex.: Inicio > Casa 
            Todos alinhados iguais e com hover, com destaque em qual página está no momento.*/}
            <div className="Top">
            <img href="https://imgs.search.brave.com/W4G6kU1IioffVGmnPRo05eCxUjaI3-rLtQHdu5qpUhQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9uZXR3/b3JrLmdydXBvYWJy/aWwuY29tLmJyL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy80/LzIwMTYvMDgvMTMx/LnBuZz9xdWFsaXR5/PTcw" alt="" />
            <h3>Confira as outras páginas</h3>
            </div>

            <div className="Bottoom">
            <nav>
                <ul>
                    <li><Link to="/">Inicio</Link></li>
                    <li><Link to="/Simulador">Simulador</Link></li>
                    <li><Link to="/Altura">Altura</Link></li>
                    <li><Link to="/Alcance">Alcance</Link></li>
                    <li><Link to="/Tempo">Tempo</Link></li>
                    <li><Link to="/Exemplos">Como usar</Link></li>
                    <li><Link to="/Sobre">Sobre</Link></li>
                </ul>
            </nav>
            </div>
        </div>
        </>
     );
}
 
export default BarraLateral;