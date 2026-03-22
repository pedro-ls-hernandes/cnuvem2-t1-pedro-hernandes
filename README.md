# Atividade 4.1 Computação em Nuvem II
> **Aluno:** Pedro Lucas dos Santos Hernandes
> **6º Semestre de DSM**
> **Disciplina:** Computação em Nuvem II (ISW035)
> **Professor:** Ronan Adriel Zenatti — FATEC Jahu / Centro Paula Souza

# 1. Objetivo da atividade
Demonstrar, de forma prática, a capacidade de provisionar e integrar serviços de armazenamento em nuvem — object storage (container/bucket) e banco de dados MySQL gerenciado — conectando-os a uma aplicação funcional desenvolvida na linguagem de programação do projeto interdisciplinar.

# 2. Descrição do projeto
> O projeto foi desenvolvido em Node.js. Ele utiliza serviços de computação em nuvem da plataforma Azure. Suas funcionalidades são simples, porém capazes de mostrar o funcionamento do armazenamento das Blobs em Containeres de uma Storage Account e a consulta de um banco de dados MySQL gerenciado.

### Funcionalidades
> As funcionalidades podem ser vistas detalhadamente em seus serviços ou então em sua execução pelo arquivo app.js
- Storage — Inclusão de arquivo: enviar (upload) um arquivo para o container.
- Storage — Exclusão de arquivo: remover (delete) um arquivo do container.
- Storage — Listagem: listar os arquivos presentes no container.
- Banco de Dados — Consulta: conectar-se ao MySQL em nuvem e listar os dados previamente preenchidos na tabela.


# 3. Plataforma escolhida
A plataforma escolhida para o projeto foi a *Azure*. Decidi escolher a plataforma pois possuo maior conhecimento das ferramentas e do ambiente de trabalho da plataforma, tendo usado a mesma no **Projeto Interdisciplinar** do semestre anterior.

# 4. Serviços de nuvem utilizados e como foram configurados
> Foram utilizados o Azure Blob Storage para armazenamento e Azure MySQL para o banco de dados. Ambos foram configurados utilizando os tiers grátis e de menores custos disponíveis dentro da plataforma.

### Azure Blob Storage
> Para criar um Blob Storage, vá até os recursos do portal da Azure, busque por **Contas de Armazenamento** ou **Storage Accounts**, em inglês. Após isso, selecione a opção de criar um novo serviço. Configure o serviço de acordo com as características que mais lhe convém, no meu caso, as opções foram as seguintes:
- **Assinatura:** Azure for Students
- **Região:** Brazil South
- **Performance:** Standard
- **Redundância:** Armazenamento com redundância local (LRS)
- **Camada de acesso:** Frio
- **Acesso à rede pública:** Habilitado para fins de estudo, porém permitido à IPs selecionados
> Após isso, vá até o recurso criado e procure por **Contâineres** na seção de **Armazenamento de Dados**. Crie um container que será utilizado para armazenar seus arquivos. Você pode criar mais de um caso queira especificar cada tipo de armazenamento.


### Azure MySQL
> Para criar um banco de dados MySQL na Azure, vá até os recursos do portal da Azure, busque por **Servidores do Banco de Dados do Azure para MySQL** ou um simples **MySQL** para conseguir achar o recurso. Após isso, selecione a opção de criar um novo serviço e então, **Criação Rápida** ou **Criação Avançada** do tipo **Servidor Flexível**. Configure o serviço de acordo com as características que mais lhe convém, no meu caso, as opções foram as seguintes:
- **Assinatura:** Azure for Students
- **Região:** East US
- **Tipo de carga de trabalho:** Desenvolvimento/Teste - SKU STandard_B1ms
- **Firewall:** Sem regra
- **Alta disponivilidade:** Desabilitada (SLA de 99,9%)
- **Backup:** Sem backup
> Após isso, vá até o recurso criado e procure pelas informações de conexão disponíveis em **Visão Geral** ou em **Configurações -> Conectar**, para informações mais detalhadas. Após isso, basta fazer a conexão com o banco através do seu workbench SQL de preferência.

# 6. Diagrama de arquitetura

# 7. Estrutura da tabela MySQL

# 7. Pré-requisitos
- Node.js
- Npm
- Ferramentas de banco de dados como MySQL Workbench, Dbeaver...
- Assinatura Azure

# 8. Como executar
- 1. Clone o repositório no destino de sua preferência
```git clone https://github.com/pedro-ls-hernandes/cnuvem2-t1-pedro-hernandes.git ```
- 2. Acesse o repositório da maneira que preferir (terminal direto ou editor de sua escolha)
```cd cnuvem2-t1-pedro-hernandes ```
- 3. Instale as dependências
```npm install```
- 4. Crie um arquivo **.env** ou renomeie o **.env.example** para .env e então configure as variáveis de ambiente acessadas através da plataforma
- 5. Inicie o app
```npm start```

# 9. Evidências
> As evidências da execução do projeto podem ser encontradas na pasta evidencias/.