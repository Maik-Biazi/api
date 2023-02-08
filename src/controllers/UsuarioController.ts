import { Request, Response } from "express";

class UsuarioController{

    login(request:Request,response:Response){
        return response.json({mensagem: "Usuario ou senha invalido"})

    }
    obter(request:Request,response:Response){
        response.json({id:1,nome:"Mak"})
    }


}
export default new UsuarioController();