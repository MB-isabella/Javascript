const fs = require ('fs');
fs.readFile('example.txt', 'utf-8', (erro, conteudo_do_arquivo) => {
    if (erro) {
        console.log('Erro ao ler o arquivo', erro);
        return;
    }
    console.log('Conteúdo do arquivo:', conteudo_do_arquivo);
});

console.log('Essa mensagem aparece primeiro.');