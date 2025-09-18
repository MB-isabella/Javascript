// crie e exporte as quatro operações matemáticas básicas: soma, subtração, multiplicação e divisão.
export function soma(a, b) {
    return a + b;
}

export function subtracao(a, b) {
    return a - b;
}

export function multiplicacao(a, b) {
    return a * b;
}

export function divisao(a, b) {
    if (b === 0) {
        return 'Erro: Divisão por zero não é permitida.';
    }
    return a / b;
}