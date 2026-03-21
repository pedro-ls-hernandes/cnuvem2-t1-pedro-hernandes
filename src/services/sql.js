// #=======================================================================#
// Definição das dependências do Azure MySQL
// =========================================================================
// Carrega as variáveis de ambiente do arquivo .env para acessar o Azure MySQL
require('dotenv').config();

// Importa o cliente de serviço de banco de dados do Azure MySQL
const mysql = require("mysql2/promise");

// Mapeia as variáveis de ambiente para acessar o Azure MySQL
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,

    ssl: {
        rejectUnauthorized: true
    }
});
// #=======================================================================#



// #=======================================================================#
// BUSCANDO INFORMAÇÕES NO BANCO DE DADOS
// =========================================================================
// Função para listar as tabelas presentes no banco de dados Azure MySQL
async function listarTabelas() {
    try {
        // Consulta para listar as tabelas presentes no banco de dados Azure MySQL
        const [rows] = await connection.query("SHOW TABLES ");

        // Formando os resultados para exibição
        for (const row of rows) {
            // Obtém o nome da tabela a partir do resultado da consulta
            const nomeTabela = Object.values(row)[0];

            // Operador condicional utilizado para fins didaticos do projeto. Deixar todas as informações de ambas as
            // tabelas acaba sendo confuso para visualização, então optei por mostrar apenas as informações mais relevantes de cada tabela.
            if (nomeTabela === "entregas") {
                // Faz a consulta na database e retorna a tabela formatada dos itens.
                const [linhas] = await connection.query(`SELECT id, item, quantidade, valor, cliente_id, logradouro, bairro, numero, categoria FROM ${nomeTabela}`);
                console.log(`\nTabela: ${nomeTabela}`);
                console.table(linhas);
                
            } else {
                // Faz a consulta na database e retorna a tabela formatada dos itens.
                const [linhas] = await connection.query(`SELECT id, nome, email FROM ${nomeTabela}`);
                console.log(`\nTabela: ${nomeTabela}`);
                console.table(linhas);
            }
        }
    } catch (error) {
        // Exibe uma mensagem de erro caso ocorra algum problema durante a conexão ou consulta ao banco de dados Azure MySQL, especifica o erro logo depois
        console.error("Erro ao conectar ao banco de dados SQL:", error);
    }
}
// #=======================================================================#


// Exporta a função para ser utilizada no app.js
module.exports = {
    listarTabelas
};

