import conn from "../config/conn.js";
import { v4 as uuidv4} from "uuid";

export const criarPalestrante = async (request, response) => {
    const {nome, expertise, email, telefone, evento_id} = request.body

    if(!nome) {
        response.status(400).json({message: "O nome é obrigatório"});
        return;
    };
    if(!expertise) {
        response.status(400).json({message: "A expertise é obrigatório"});
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

    const palestrante_id = uuidv4();

    const palestrantesSql = /*sql*/`INSERT INTO palestrantes(??, ??, ??, ??, ??) VALUES (?, ?, ?, ? , ?)`
    const palestrantesData = ["palestrante_id","nome", "expertise", "email", "telefone", palestrante_id, nome, expertise, email, telefone]

    conn.query(palestrantesSql, palestrantesData, (err, data) => {
        if(err){
            console.error(err);
            response.status(500).json({Err: "Erro ao cadastrar palestrante"});
            return;
        };

        response.status(201).json({message: "Palestrante cadastrado com sucesso"});
    })
}

export const listarPalestrantes = (request, response) => {
    const sql = `SELECT * FROM palestrantes`

    conn.query(sql, (err, data) => {
        if(err){
            console.error(err);
            response.status(500).json({Err: "Erro ao listar palestrantes"});
            return;
        };

        if(data.length === 0){
            response.status(404).json({message: "Não há palestrantes cadastrados"});
            return;
        }

        const palestrantes = data

        response.status(200).json(palestrantes)
    })
}