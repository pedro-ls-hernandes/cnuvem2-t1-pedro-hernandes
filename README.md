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
- **Assinatura:** Azure for Students
- **Região:** Brazil South
- **Performance:** Standard
- **Redundância:** Armazenamento com redundância local (LRS)
- **Camada de acesso:** Frio
- **Acesso à rede pública:** Habilitado para fins de estudo, porém permitido à IPs selecionados

### Azure MySQL
- **Assinatura:** Azure for Students
- **Região:** East US
- **Tipo de carga de trabalho:** Desenvolvimento/Teste - SKU STandard_B1ms
- **Firewall:** Sem regra
- **Alta disponivilidade:** Desabilitada (SLA de 99,9%)
- **Backup:** Sem backup
# 6. Diagrama de arquitetura

# 7. Pré-requisitos do sistema

# 8. Como executar

# 9. Estrutura da tabela MySQL