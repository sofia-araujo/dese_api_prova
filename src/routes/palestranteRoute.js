import { Router } from "express";

import { criarPalestrante, listarPalestrantes } from "../controllers/palestranteController.js";

const route = Router();

route.post('/palestrantes', criarPalestrante)
route.get('/palestrantes', listarPalestrantes)


export default route