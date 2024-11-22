import conn from "../config/conn.js";

const tabelaParticipantesEvento = /*sql*/ `
    CREATE TABLE IF NOT EXISTS evento_participantes(
        participante_id VARCHAR(60),   
        evento_id VARCHAR(60),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (participante_id) REFERENCES participantes (participante_id),
        FOREIGN KEY (evento_id) REFERENCES eventos (evento_id)
    )`

conn.query(tabelaParticipantesEvento, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Tabela [evento_participantes] criada com sucesso");
});