//const funcoesMatematicas = require('./funcoes_matematicas');
import * as funcoesMatematicas from './modulos/funcoes_matematicas.js';

// Exemplo de uso das funções do módulo
//
//forma 1 de fazer:
console.log("Soma: 5 + 3 = " + funcoesMatematicas.soma(5, 3));
//
//forma 2 de fazer:
const resultadoSubtracao = funcoesMatematicas.subtracao(10, 4);
console.log(`Subtração: 10 - 4 = ${resultadoSubtracao}`);
//
//resto das operações feitas com a forma 2:
//
const resultadoMultiplicacao = funcoesMatematicas.multiplicacao(6, 7);
console.log(`Multiplicação: 6 * 7 = ${resultadoMultiplicacao}`);
const resultadoDivisao = funcoesMatematicas.divisao(7, 7);
console.log(`Divisão: 7 / 7 = ${resultadoDivisao}`);
const resultadoDivisaoPorZero = funcoesMatematicas.divisao(9, 0);
console.log(`Divisão: 9 / 0 = ${resultadoDivisaoPorZero}`);
//
//orientação a objeto -> blablabla.blabla