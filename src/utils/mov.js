const g = 9.8

export function grausParaRad(angulo){
    return angulo * (Math.PI/180); //o JS não usa o Graus(angulos) normais, então tem que usar o radiano;
}

// calcula o alcance maximo sem o tempo
export function calcularAlcance(velocidade, angulo, gravidade){
    const ang = grausParaRad(angulo);  //usa o radiano calculado.
    const g = parseFloat(gravidade)
    return (velocidade ** 2 * Math.sin(2 * ang)) / g;
}

// calcula o alcance maximo no tempo digitado
export function calcularAlcanceNoTempo(velocidade, angulo, tempo){
    const ang = grausParaRad(angulo)
    return velocidade * Math.cos(ang) * tempo;
}

// calcular a Altura Maxima sem o tempo
export function calcularAltura(velocidade, angulo, gravidade){
    const ang = grausParaRad(angulo);
    const g = parseFloat(gravidade);


    return(velocidade ** 2 * Math.sin(ang) ** 2) / (2 * g)
}

// calcular a Altura no tempo digitado
export function calcularAlturaNoTempo(velocidade, angulo, gravidade, tempo){
    const v0 = parseFloat(velocidade);
    const ang = grausParaRad(angulo);
    const g = parseFloat(gravidade);

    const v0y = velocidade * Math.sin(ang)


    return v0y * tempo - ( g / 2) * (tempo ** 2);
}

export function calcularTempo(velocidade, angulo, gravidade){

    const rad = grausParaRad(angulo)
    const g = parseFloat(gravidade)

    const tempo = (2 * velocidade * Math.sin(rad)) / g;

    return tempo;
}

export function CalAlcance(velocidade, angulo, tempo){
    const angRad = grausParaRad(angulo);  //usa o radiano calculado.
    const t = tempo;

    return (velocidade * Math.cos(angRad)) * t;
}
export function CalAltura(velocidade, angulo, gravidade, tempo){
        const v0 = parseFloat(velocidade);
        const ang = grausParaRad(angulo);
        const g = parseFloat(gravidade);
        const t = tempo
        const v0y = velocidade * Math.sin(ang)
        
        const h = v0y * t + ( g / 2) * (t ** 2);
        return h; //(v0 ** 2 * Math.sin(ang) ** 2) / (2 * g)
    };