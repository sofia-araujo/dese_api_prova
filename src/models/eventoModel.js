import conn from "../config/conn.js                       ";

const tabelaEvento = /*sql*/`
    CREATE TABLE IF NOT EXISTS eventos(
        evento_id VARCHAR(60) PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        tema VARCHAR(255) NOT NULL,
        data DATETIME NOT NULL,
        local VARCHAR(300) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)`;

conn.query(tabelaEvento, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Tabela [eventos] criada com sucesso");
});