const express = require('express');
const path = require('path'); //evita tratar de caminhos longos
const app = express();
const port = 3000;

// Middleware para arquivos estáticos
app.use(express.static('public'));

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

// Servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
