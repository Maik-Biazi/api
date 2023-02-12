import { Router } from "express";
import { getUserList } from "./db/controllers/UserController";

const routes = Router();

routes.get('/', (req, res) => {
  getUserList(req,res)
})

routes.post('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

routes.put('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

routes.delete('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

routes.patch('/', (_req, res) => {
  return res.send({message: 'Hello World!'})
})

export default routes;