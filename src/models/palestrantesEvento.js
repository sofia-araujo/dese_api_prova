import conn from "../config/conn.js";

const tabelaPalestrantesEvento = /*sql*/ `
    CREATE TABLE IF NOT EXISTS evento_palestrantes(
        palestrante_id VARCHAR(60),     
        evento_id VARCHAR(60),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (evento_id) REFERENCES eventos (evento_id),
        FOREIGN KEY (palestrante_id) REFERENCES palestrantes (palestrante_id)
    )`

conn.query(tabelaPalestrantesEvento, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Tabela [evento_palestrantes] criada com sucesso");
});