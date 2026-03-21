// #=======================================================================#
// Definição das funções necessárias para a aplicação, importadas dos arquivos de serviços
// =========================================================================

// Importa as funções de execução no container Azure
const { uploadArquivo, deletarArquivo, listarArquivos } = require('./services/storage');

// Importa as funções de execução no banco de dados Azure MySQL
const { listarTabelas } = require('./services/sql');
// #=======================================================================#



// #=======================================================================#
// Execução das funções
// =========================================================================
async function main() {

  // #============ Azure Blob Storage ============# 
  // Upload de arquivos da atividade para teste
  /* É possível fazer o upload de qualquer arquivo, basta usar o nome do arquivo e extensão */
  await uploadArquivo('teste.jpg');           // Esse upload propositalmente ocasiona em erro, não sendo encontrado o arquivo, para mostrar a mensagem de erro.
  await uploadArquivo('teste2.jfif');
  await uploadArquivo('cat.gif');
  await uploadArquivo('atividade_pln1.mp4');
  await uploadArquivo('video_atividade.mp4'); // Ambos os videos foram apagados para realização do commit por serem arquivos grandes

  // Deletar um arquivo específico do container do Azure Storage, utilizando o nome do arquivo e extensão
  /* Mesmo caso do upload*/
  await deletarArquivo('teste.jpg');

  // Listagem dos arquivos presentes no container do Azure Storage
  await listarArquivos();
  // #==========================================#

  // #============== Azure MySQL ===============# 
  // Listagem das tabelas presentes no banco de dados Azure MySQL com informações.
  // Formatada para visualização no terminal
  await listarTabelas();
  // #==========================================#
}


// Fim da execução das funções
main();

