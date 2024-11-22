import conn from "../config/conn.js                       ";

const tabelaPalestrante = /*sql*/`
    CREATE TABLE IF NOT EXISTS palestrantes(
        palestrante_id VARCHAR(60) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        expertise VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        telefone VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

conn.query(tabelaPalestrante, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Tabela [palestrantes] criada com sucesso");
});