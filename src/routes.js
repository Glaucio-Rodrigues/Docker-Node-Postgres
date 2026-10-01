import express from "express"
import { createUser, getAllusers, deleteUsers } from "./controllers/userController.js"

const router = express.Router()

router.post ('/cadastro', createUser)
router.get ('/todos', getAllusers)
router.delete ('/deletar/:id', deleteUsers)


export default router

