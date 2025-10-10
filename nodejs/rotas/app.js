import http from "http";
//
const PORT = 3000;
//
//Cria servidor
const server = http.createServer((request, response) => {
    const url = request.url;
    const method = request.method;

    //define o cabeçalho da resposta como html
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    //roteamento básico
    if (url === "/") {
        response.statusCode = 200; //OK
        response.end("<h1>Página Inicial</h1>");
    }
    else if (url === "/sobre" && method === "GET") {
        response.statusCode = 200; //OK
        response.end("<h1>Sobre Nós</h1><p>Esta é uma aplicação de exemplo com Node.js puro.</p>");
    }
    else if (url === "/contato") {
        response.statusCode = 200; //OK
        response.end("<h1>Fale Conosco</h1");
    }
    else if (url === "/fotos") {
        response.statusCode = 200; //OK
        response.end("<h1>Fotos</h1>");
    }
        else if (url === "/Imagens") {
        response.statusCode = 200; //OK
        response.end("<h1>Imagens</h1>");
    }
    else {
        // se nenhuma rota corresponder
        response.statusCode = 404; //not found
        response.end("<h1>404 - Página não encontrada</h1>");
    }
});
//
// Inicia o servidor para ouvir uma porta definida
server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});