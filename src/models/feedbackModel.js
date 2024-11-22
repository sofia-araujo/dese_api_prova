import conn from "../config/conn.js";

const tabelaFeedback = /*sql*/`
    CREATE TABLE IF NOT EXISTS feedback(
        feedback_id VARCHAR(60) PRIMARY KEY,
        nota DECIMAL(5, 2) NOT NULL,
        comentario VARCHAR(255) NOT NULL,
        participante_id VARCHAR(60),
        evento_id VARCHAR(60),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
        FOREIGN KEY (participante_id) REFERENCES participantes (participante_id),
        FOREIGN KEY (evento_id) REFERENCES eventos (evento_id)
)`;

conn.query(tabelaFeedback, (err) => {
    if(err){
        console.error(err);
        return;
    };
    console.log("Tabela [Feedback] criada com sucesso");
});