import * as dotenv from 'dotenv' 

dotenv.config()

import express from "express";


import cors from 'cors'

import routes from './routes';
const porta = process.env.PORTA;
const app = express();

app.use(cors())
app.use(routes)

app.use(express.json({limit:'50mb'}));

app.listen(porta,()=> console.log("api rodando na porta"+ porta))

