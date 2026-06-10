const GRAVIDADE_PADRAO = 10;

export function grausParaRad(angulo) {
    return angulo * (Math.PI / 180);
}

// calcula o alcance máximo (fórmula direta, sem tempo)
export function calcularAlcance(velocidade, angulo, gravidade) {
    const ang = grausParaRad(angulo);
    const g = parseFloat(gravidade) || GRAVIDADE_PADRAO; 
    return (velocidade ** 2 * Math.sin(2 * ang)) / g;
}

// calcular a Altura Máxima (fórmula direta, sem tempo)
export function calcularAltura(velocidade, angulo, gravidade) {
    const ang = grausParaRad(angulo);
    const g = parseFloat(gravidade) || GRAVIDADE_PADRAO; 
    return (velocidade ** 2 * Math.sin(ang) ** 2) / (2 * g);
}

// calcula o tempo total de voo
export function calcularTempo(velocidade, angulo, gravidade) {
    const ang = grausParaRad(angulo);
    const g = parseFloat(gravidade) || GRAVIDADE_PADRAO; 
    return (2 * velocidade * Math.sin(ang)) / g;
}

// calcula o alcance em um tempo específico
export function calcularAlcanceNoTempo(velocidade, angulo, tempo) {
    const ang = grausParaRad(angulo);
    return velocidade * Math.cos(ang) * tempo;
}

// calcula a altura em um tempo específico
export function calcularAlturaNoTempo(velocidade, angulo, gravidade, tempo) {
    const v0 = parseFloat(velocidade);
    const ang = grausParaRad(angulo);
    const g = parseFloat(gravidade) || GRAVIDADE_PADRAO;
    const v0y = v0 * Math.sin(ang);
    
    const h = v0y * tempo - (g / 2) * (tempo ** 2);
    return h; 
}

// REMOVIDO: calAlcance — era duplicata de calcularAlcanceNoTempo
// REMOVIDO: calAltura  — era duplicata de calcularAlturaNoTempo