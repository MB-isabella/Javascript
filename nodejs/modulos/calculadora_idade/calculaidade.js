//códico que cria função para calcular idade a partir do ano atual e ano de nascimento
export function calcularIdade(nome, anoAtual, anoNascimento) {
    idade = anoAtual - anoNascimento;
    return `Olá, ${nome}! Em ${anoAtual} Você tem ${idade} anos.`;
}
