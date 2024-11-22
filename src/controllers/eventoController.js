import conn from "../config/conn.js";
import { v4 as uuidv4} from "uuid";
import { response } from "express";


export const criarEvento = async (request, response) => {
    const {nome, tema, data, local, palestrantes} = request.body

    if(!nome) {
        response.status(400).json({message: "O nome é obrigatório"});
        return;
    };
    if(!tema) {
        response.status(400).json({message: "O tema é obrigatório"});
        return;
    };
    if(!data) {
        response.status(400).json({message: "A data é obrigatório"});
        return;
    };
    if(!local) {
        response.status(400).json({message: "O local é obrigatório"});
        return;
    };
    
    const evento_id = uuidv4();

    const eventosSql = /*sql*/`INSERT INTO eventos(??, ??, ??, ??, ??) VALUES (?, ?, ?, ? , ?)`
    const eventosData = ["evento_id","nome", "tema", "data", "local", evento_id, nome, tema, data, local]

    conn.query(eventosSql, eventosData, (err, data) => {
        if(err){
            console.error(err);
            response.status(500).json({Err: "Erro ao cadastrar eventos"});
            return;
        };

        const insertPalestrantes = /*sql*/ `INSERT INTO evento_palestrantes(palestrante_id, evento_id) VALUES ?`
        const dataSql = palestrantes.map((palestrante) => [
            palestrante,
            evento_id
        ])

        conn.query(insertPalestrantes, [dataSql], (err, data) => {
            if(err){
                console.error(err);
                response.status(500).json({Err: "Erro ao cadastrar palestrantes do eventos"});
                return;
            };

            response.status(201).json({message: "Evento cadastrado com sucesso"});
        })
        
    })
}

export const listarEventos = (request, response) => {
    const sql = /*sql*/ `SELECT * FROM evento_palestrantes RIGHT JOIN `
}

export const atualizarEvento = (request, response) => {
    const {evento_id, nome, tema, data, local, palestrantes} = request.body

    if(!evento_id) {
        response.status(400).json({message: "O id do evento é obrigatório"});
        return;
    };
    if(!nome) {
        response.status(400).json({message: "O nome é obrigatório"});
        return;
    };
    if(!tema) {
        response.status(400).json({message: "O tema é obrigatório"});
        return;
    };
    if(!data) {
        response.status(400).json({message: "A data é obrigatório"});
        return;
    };
    if(!local) {
        response.status(400).json({message: "O local é obrigatório"});
        return;
    };
    if(!palestrantes) {
        response.status(400).json({message: "Os palestrantes  é obrigatório"});
        return;
    };
    
    const updateEvento = /*sql*/ `UPDATE eventos SET ?? = ?, ?? = ?, ?? = ?, ?? = ? WHERE ?? = ?`
    const updateData = ["nome", nome,"tema", tema, "data", data, "local", local, "evento_id",  evento_id]

    conn.query(updateEvento, updateData, (err, data) => {
        if(err){
            console.error(err);
            response.status(500).json({Err: "Erro ao atualizar evento"});
            return;
        };
        
        palestrantes.forEach(palestrante => {
            const upadatePalestrante = /*sql*/ `UPDATE evento_palestrantes SET ?? = ? WHERE ?? = ?`
            const updateData = ["palestrante_id", palestrante, "evento_id", evento_id]

            conn.query(upadatePalestrante, updateData, (err, data) => {
                if(err){
                    console.error(err);
                    response.status(500).json({Err: "Erro ao atualizar  palestrante evento"});
                    return;
                };
            })
        });    
         response.status(201).json({message: "Evento atualizado com sucesso"});
        
    })
}

export const deletarEvento = (request, response) => {
    const {evento_id} = request.body

    if(!evento_id){
        response.status(400).json({message: "O id do evento é obrigatório"});
        return;
    }

    const sqlParticipantes = /*sql*/ /*sql*/ `DELETE FROM evento_participantes WHERE ?? = ?`
    const dataSql = ["evento_id", evento_id]

        conn.query(sqlParticipantes, dataSql, (err, data) => {
            if(err){
                console.error(err);
                response.status(500).json({Err: "Erro ao deletar participantes do evento"});
                return;
            };

            const sql = /*sql*/ `DELETE FROM eventos WHERE ?? = ?`
            conn.query(sql, dataSql, (err, data) => {
                if(err){
                    console.error(err);
                    response.status(500).json({Err: "Erro ao deletar evento"});
                    return;
                };    
            response.status(201).json({message: "Evento deletado com sucesso!"});
    })
})

    
}