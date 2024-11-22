import express from "express";
import "dotenv/config";
import cors from "cors";

import conn from "./config/conn.js";

import "./models/eventoModel.js"
import "./models/palestranteModel.js"
import "./models/participanteModel.js"
import "./models/palestrantesEvento.js"
import "./models/participantesEvento.js"
import "./models/feedbackModel.js"
import palestrantesRouter from "./routes/palestranteRoute.js"
import eventosRouter from "./routes/eventoRoute.js"

const app = express();

const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/eventos', palestrantesRouter)
app.use('/eventos', eventosRouter)

app.use((request, response) => {
    response.status(404).json({message: "Rota não encontrada"});
});

app.listen(PORT, () => {
    console.log(`Servidor on PORT ${PORT}`)
})