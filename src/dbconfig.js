/**
 * Configurações e conexão com o banco de dados.
 */

// Import bibliotecas
const sqlite3 = require("sqlite3").verbose();
const filepath = "./database.db";

/**
 * Cria uma conexão com o banco de dados.
 * @returns 
 */
function createDbConnection() {
  const db = new sqlite3.Database(filepath, (error) => {
    if (error) {
      return console.error(error.message);
    }
    createTable(db);
  });
  console.log("Conexão com SQLite foi estabelecida");
  return db;
}

/**
 * Cria a tabela de cliente se não existir.
 * 
 * @param {*} db 
 */
function createTable(db) {
    db.exec(`
    create table IF NOT EXISTS CLIENTE (
            clienteId integer, 
            nome varchar(100), 
            cpf varchar(11), 
            CONSTRAINT PK_CLIENTE PRIMARY KEY (clienteId));
     `);
  }

  module.exports = createDbConnection();
  