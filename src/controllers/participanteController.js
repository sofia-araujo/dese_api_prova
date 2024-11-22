import conn from "../config/conn.js";
import { v4 as uuidv4} from "uuid";
import { response } from "express";
import jwt  from "jsonwebtoken";


export const participante = (request, response) => {
    const {nome, email, telefone} = request.body
    if(!nome) {
        response.status(400).json({message: "O nome é obrigatório"});
        return;
    };
    if(!email) {
        response.status(400).json({message: "O email é obrigatório"});
        return;
    };
    if(!telefone) {
        response.status(400).json({message: "O telefone é obrigatório"});
        return;
    };
    
    // Validação se email é valido
    if(!email.includes("@")){
        response.status(409).json({message: "Deve conter @ no email"});
        return;
    };
    const participante_id = uuidv4()

    const sql = /*sql*/ `INSERT INTO participantes (??, ??, ??, ??) VALUES (?, ?, ?, ?)`
    const dataSql = ["participante_id", "nome", "email", "telefone", participante_id, nome, email, telefone]

    conn.query(sql, dataSql, (err, data) => {
        if(err){
            console.error(err);
            response.status(500).json({Err: "Erro ao cadastrar participante"});
            return;
        };

        response.status(201).json({message: "Participante cadastrado com sucesso"});
    })
}

export const participanteEvento = (request, response) => {
    const {participante_id, evento_id} = request.body

    const sql = /*sql*/ `INSERT INTO evento_participantes (??, ??) VALUES (?, ?)`
    const dataSql = ["participante_id", "evento_id", participante_id, evento_id]

    conn.query(sql, dataSql, (err, data) => {
        if(err){
            console.error(err);
            response.status(500).json({Err: "Erro ao cadastrar participante no evento"});
            return;
        };

        response.status(201).json({message: "Participante cadastrado com sucesso"});
    })
}

export const feedback = (request, response) => {
    const {participante_id, evento_id, nota, comentario} = request.body

    if(!participante_id) {
        response.status(400).json({message: "O id do participante é obrigatório"});
        return;
    };
    if(!evento_id) {
        response.status(400).json({message: "O id do evento é obrigatório"});
        return;
    };
    if(!nota) {
        response.status(400).json({message: "A nota é obrigatório"});
        return;
    };
    if(!comentario) {
        response.status(400).json({message: "O comentário é obrigatório"});
        return;
    };

    const feedback_id = uuidv4()
    const insertSql = /*sql*/ `INSERT INTO feedback (??, ??, ??, ??, ??) VALUES (?, ?, ?, ?, ?)`
    const dataSql = ["feedback_id", "nota", "comentario", "participante_id", "evento_id", feedback_id, nota, comentario, participante_id, evento_id]

    conn.query(insertSql, dataSql, (err, data) => {
        if(err){
            console.error(err);
            response.status(500).json({Err: "Erro ao cadastrar feedback"});
            return;
        };

        response.status(201).json({Err: "Feedback criado com sucesso!"});
    })
}