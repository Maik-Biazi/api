import { Router } from 'express';


const routes = Router();

import UsuarioController from "./controllers/UsuarioController";


routes.post('/usuarios',UsuarioController.login)
routes.get('/usuarios',UsuarioController.obter)



export default routes;