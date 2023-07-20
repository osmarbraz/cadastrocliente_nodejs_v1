/**
 * Aplicação principal do CRUD de cliente.
 */

// Import das bibliotecas
const express = require('express');
const bodyParser = require('body-parser');

// Inicializa o servidor
const app = express();
// Define a porta do servidor
const port = 3000;

// Middleware para analisar o corpo da solicitação
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
// Rota dos serviços do CRUD para o modelo Cliente
const rotas = require("./servicos");
// Carrega os serviços
app.use(rotas);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor ouvindo porta ${port}`);
});