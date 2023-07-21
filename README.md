# Programa servidor API-REST do CRUD de Cliente utilizando Node.js e SQLite.

- O projeto foi desenvolvido no VSCodde deve ser chamado cliente_nodejs_v1.
- Programa servidor web que cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET, POST, PUT e DELETE.
- A pasta src contêm os fontes do projeto.
- Os dados de configuração da integração com o banco de dados estão no arquivo src/dbconfig.js.
- A tabela cliente possui os campos clienteId, nome e cpf.

- Dependências:    
    - express,
    - sqlite3.

- Execução:    
   <pre><code>npm start</code></pre>

- Arquivos em src:
    - index.js - Programa principal com o servidor Express.
    - clienterecurso.js - Contêm os métodos de acesso aos recursos do banco de dados.
    - dbconfig.js - Contêm as configurações e conexão com o banco de dados.
    - servicos.js - Contêm as rotas aos métodos de acesso ao banco de dados.