import { Router } from "express";

import { atualizarEvento, criarEvento, deletarEvento } from "../controllers/eventoController.js";
import { feedback, participanteEvento, participante } from "../controllers/participanteController.js";
import {Auth}   from "../middlewares/auth.js";

const route = Router();

route.post('/criar', criarEvento)
route.post('/inscrever', participanteEvento)
route.post('/feedback', feedback)
route.put('/editar', atualizarEvento)
route.delete('/cancelar', deletarEvento)
route.post('/participantes/registrar', participante)
export default route