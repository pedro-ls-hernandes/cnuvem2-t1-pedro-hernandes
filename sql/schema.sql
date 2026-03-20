-- schema.sql — Criação da tabela e inserção de dados iniciais
-- Disciplina: Computação em Nuvem II (ISW035)
CREATE DATABASE IF NOT EXISTS trabalho_nuvem_1;

USE trabalho_nuvem_1;

CREATE TABLE
    IF NOT EXISTS entregas (
        id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
        item VARCHAR(100) NOT NULL,
        quantidade INT NOT NULL,
        valor DECIMAL(10, 2) NOT NULL,
        nome_cliente VARCHAR(100) NOT NULL,
        logradouro VARCHAR(255) NOT NULL,
        bairro VARCHAR(255) NOT NULL,
        numero VARCHAR(100) NOT NULL,
        categoria VARCHAR(100) NOT NULL,
        criado_em DATETIME DEFAULT CURRENT_TIMESTAMP
    );

INSERT INTO
    entregas (
        item,
        quantidade,
        valor,
        nome_cliente,
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
        'João Silva',
        'Rua das Flores',
        'Jardim Botânico',
        '123',
        'Shampoo'
    ),
    (
        'Barbeador Elétrico',
        2,
        99.99,
        'Maria Oliveira',
        'Avenida Central',
        'Centro',
        '456',
        'Eletrônicos'
    ),
    (
        'Tintura para Cabelo Acquaflora 20ml',
        1,
        49.90,
        'Ana Costa',
        'Rua do Comércio',
        'Vila Madalena',
        '789',
        'Tintura'
    ),
    (
        'Paleta de Sombras Ruby Rose 12 Cores',
        1,
        129.90,
        'Carlos Pereira',
        'Avenida das Américas',
        'Barra da Tijuca',
        '1010',
        'Maquiagem'
    ),
    (
        'Removedor de Esmalte Lutex 500ml',
        4,
        140.00,
        'Fernanda Souza',
        'Rua dos Pinheiros',
        'Pinheiros',
        '2020',
        'Removedor de Esmalte'
    );