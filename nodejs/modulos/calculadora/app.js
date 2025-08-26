const funcoesMatematicas = require('./funcoes_matematicas');

// Exemplo de uso das funções do módulo
const resultadoSoma = funcoesMatematicas.soma(5, 3);
console.log(`Soma: 5 + 3 = ${resultadoSoma}`);
const resultadoSubtracao = funcoesMatematicas.subtracao(10, 4);
console.log(`Subtração: 10 - 4 = ${resultadoSubtracao}`);
const resultadoMultiplicacao = funcoesMatematicas.multiplicacao(6, 7);
console.log(`Multiplicação: 6 * 7 = ${resultadoMultiplicacao}`);
const resultadoDivisao = funcoesMatematicas.divisao(7, 7);
console.log(`Divisão: 7 / 7 = ${resultadoDivisao}`);
const resultadoDivisaoPorZero = funcoesMatematicas.divisao(9, 0);
console.log(`Divisão: 9 / 0 = ${resultadoDivisaoPorZero}`);    