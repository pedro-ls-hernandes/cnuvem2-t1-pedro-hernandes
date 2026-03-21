-- schema.sql — Criação da tabela e inserção de dados iniciais
-- Disciplina: Computação em Nuvem II (ISW035)

-- Cria a database que será usada para armazenar os dados SQL
CREATE DATABASE IF NOT EXISTS trabalho_nuvem_1;

-- Usa a database criada
USE trabalho_nuvem_1;

-- Cria a tabela de clientes
CREATE TABLE
    IF NOT EXISTS clientes (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(100) NOT NULL UNIQUE,
        senha VARCHAR(255) NOT NULL,
        criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
    );

-- Cria a tabela de entregas
CREATE TABLE
    IF NOT EXISTS entregas (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        item VARCHAR(100) NOT NULL,
        quantidade INT NOT NULL,
        valor DECIMAL(10, 2) NOT NULL,
        cliente_id INT,
        logradouro VARCHAR(255) NOT NULL,
        bairro VARCHAR(255) NOT NULL,
        numero VARCHAR(100) NOT NULL,
        categoria VARCHAR(100) NOT NULL,
        criado_em DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (cliente_id) REFERENCES clientes (id)
    );

-- Insere dados cadastrais dos clientes pré estabelecidos
INSERT INTO
    clientes (nome, email, senha)
VALUES
    ('João Silva', 'joao@gmail.com', 'senha123'),
    ('Maria Oliveira', 'maria@gmail.com', 'senha456'),
    ('Ana Costa', 'ana@gmail.com', 'senha789'),
    ('Carlos Pereira', 'carlos@gmail.com', 'senhaabc'),
    (
        'Fernanda Souza',
        'fernanda@gmail.com',
        'senhadef'
    );

-- Insere dados das entregas pré estabelecidas, utilizando os IDs da tabela clientes
INSERT INTO
    entregas (
        item,
        quantidade,
        valor,
        cliente_id,
        logradouro,
        bairro,
        numero,
        categoria
    )
VALUES
    (
        'Shampoo Anti-queda Bio-Extratus 1L',
        1,
        60.00,
        1,
        'Rua das Flores',
        'Jardim Botânico',
        '123',
        'Shampoo'
    ),
    (
        'Barbeador Elétrico',
        2,
        99.99,
        2,
        'Avenida Central',
        'Centro',
        '456',
        'Eletrônicos'
    ),
    (
        'Tintura para Cabelo Acquaflora 20ml',
        1,
        49.90,
        2,
        'Rua do Comércio',
        'Vila Madalena',
        '789',
        'Tintura'
    ),
    (
        'Paleta de Sombras Ruby Rose 12 Cores',
        1,
        129.90,
        4,
        'Avenida das Américas',
        'Barra da Tijuca',
        '1010',
        'Maquiagem'
    ),
    (
        'Removedor de Esmalte Lutex 500ml',
        4,
        140.00,
        3,
        'Rua dos Pinheiros',
        'Pinheiros',
        '2020',
        'Removedor de Esmalte'
    );