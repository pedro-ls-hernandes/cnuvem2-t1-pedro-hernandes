// #=======================================================================#
// Definição das dependências do Azure Storage
// =========================================================================
// Carrega as variáveis de ambiente do arquivo .env para acessar o Azure Storage
require('dotenv').config();

// Importa o cliente de serviço de blob do Azure Storage
const { BlobServiceClient } = require('@azure/storage-blob');

// Configurando as variáveis de ambiente para acessar o Azure Storage
const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
const containerNome = process.env.CONTAINER_NAME;
// #=======================================================================#


// #=======================================================================#
// Configuração dos serviços e rotas da aplicação
// =========================================================================
// Como o container está protegido para IPs específicos, é necessário utilizar uma Connection String autorizada pelo acesso compartilhado

// Cria o cliente de serviço de blob usando a conexão autorizada
const blobServiceClient = BlobServiceClient.fromConnectionString(connectionString);

// Define o container que será utilizado para armazenar os arquivos
const containerClient = blobServiceClient.getContainerClient(containerNome);
// #=======================================================================



// #=======================================================================#
// UPLOAD DE ARQUIVOS
// =========================================================================
// Busca o caminho do arquivo a ser upado, sendo usado em conjunto depois com o nome do arquivo.
// O caminho do arquivo deve ser relativo ao diretório do projeto, ou seja, o arquivo deve estar presente na pasta raiz do projeto para ser encontrado e upado.
const path = require("path");

// Função para fazer o upload do arquivo para o Azure Storage
async function uploadArquivo(filePath) {
    try {
        // Obtém o nome do arquivo a partir do caminho completo
        const fileName = path.basename(filePath);

        // Cria um cliente de blob para o arquivo a ser upado
        const blockBlobClient = containerClient.getBlockBlobClient(fileName);

        // Faz o upload do arquivo para o container
        await blockBlobClient.uploadFile(filePath);

        // Exibe uma mensagem de sucesso após o upload do arquivo
        console.log("Arquivo upado com sucesso!", fileName);

    } catch (error) {
        // Exibe uma mensagem de erro caso ocorra algum problema durante o upload do arquivo, especifica o erro logo depois
        console.log("Erro ao fazer upload do arquivo.", error);
    }
}
// #=======================================================================#

// #=======================================================================#
// DELETAR ARQUIVOS
// =========================================================================

// Função para deletar um arquivo do Azure Storage
async function deletarArquivo(nome) {
    try {
        // Cria um cliente de blob para o arquivo a ser deletado através do parâmetro
        const client = containerClient.getBlockBlobClient(nome);

        // Deleta o arquivo do container se ele existir
        await client.deleteIfExists();

        // Exibe uma mensagem de sucesso após o upload do arquivo
        console.log("Arquivo deletado com sucesso!: ", nome);
    } catch (error) {
        // Exibe uma mensagem de erro caso ocorra algum problema durante o upload do arquivo, especifica o erro logo depois
        console.log("Erro ao deletar o arquivo.", error);
    }
}
// #=======================================================================#

// #=======================================================================#
// LISTAR ARQUIVOS
// =========================================================================

// Função para fazer o upload do arquivo para o Azure Storage
async function listarArquivos() {
    try {
        // Define o array que irá armazenar os arquivos listados do container
        const arquivos = [];

        // Busca e armazena os arquivos presentes no container do Azure Storage no array anterior
        for await (const blob of containerClient.listBlobsFlat()) {
            arquivos.push(blob);
        }

        // Exibe a lista de arquivos com sucesso
        console.log("Arquivos encontrados no container do Azure Storage:");
        // Exibe apenas o nome e URL de cada arquivo para visualização no terminal
        for (const arquivo of arquivos) {
            console.log("================================");
            console.log(`Nome: ${arquivo.name}`);
            console.log(`URL: ${arquivo.url}`);
            console.log("================================");
        }
    } catch (error) {
        // Exibe uma mensagem de erro caso ocorra algum problema durante o upload do arquivo, especifica o erro logo depois
        console.log("Erro ao listar os arquivos.", error);
    }
}
// #=======================================================================#


// Exporta as funções para serem utilizadas em no app.js
module.exports = {
    uploadArquivo,
    deletarArquivo,
    listarArquivos
};