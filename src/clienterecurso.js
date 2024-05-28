/**
 * Métodos de acesso aos dados de cliente no banco de dados.
 */

// Import das bibliotecas próprias
const db = require("./dbconfig");

// Retorna uma lista com todos os clientes
const getLista = async (request, response) => {   
    const sql = 'SELECT * FROM CLIENTE';
    const params = [];
    db.all(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }
    response.status(200).json(rows);
  });
};

// Procura um cliente pelo id
const getCliente = async (request, response) => {
    const clienteId = parseInt(request.params.clienteId);
    const sql = 'SELECT * FROM CLIENTE WHERE ClienteId = ?';
    const params = [clienteId];
    db.each(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }
    response.status(200).json(rows);
    });
};

// Insere um novo cliente
const inserir = async (request, response) => {
    const { clienteId, nome, cpf } = request.body ;  
    const sql = 'INSERT INTO CLIENTE (clienteId, nome, cpf) VALUES (?, ?, ?)';
    const params =  [clienteId, nome, cpf];
    db.run(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }    
    response.status(201).json({ message: `Cliente inserido com clienteId: ${clienteId}` })
    });
};

// Altera um cliente pelo clienteId
const alterar = async (request, response) => {    
    const clienteId = parseInt(request.params.clienteId);
    const { nome, cpf } = request.body;
    const sql = 'UPDATE CLIENTE SET nome = ?, cpf = ? WHERE clienteId = ?';
    const params = [nome, cpf, clienteId];
    db.run(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }
    response.status(200).json( { message: `Cliente alterado com clienteId: ${clienteId}` });
    });
};
   

// Exclui um cliente pelo clienteId
const excluir = async (request, response) => {
    const clienteId = parseInt(request.params.clienteId);
    const sql = 'DELETE FROM CLIENTE WHERE clienteId = ?';
    const params = [clienteId];
    db.run(sql, params, (error, rows) => {
    if (error) {
        throw error;
    }
    response.status(200).json( { message: `Cliente excluído com clienteId: ${clienteId}` });
    });
};

// Exporta as funções
module.exports = {
    getLista,
    getCliente,
    inserir,
    alterar,
    excluir
};