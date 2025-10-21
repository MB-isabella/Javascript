const clientesModel = require('../models/clientesModel');

module.exports = {
  listarClientes: (req, res) => {
    const {login, senha} = req.body;
    const mensagem = clientesModel.verificarLogin(login, senha);
    res.send(`<h1>${mensagem}</h1>`);
  },

  formlogin: (req, res) => {
    res.sendFile('formLogin.html', { root: '../views' });
  }
};