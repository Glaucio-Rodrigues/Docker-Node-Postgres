import User from '../models/User.js'
import crypto from 'node:crypto'

export const createUser = async (req, res) => {
  try {
    const userToCreate = {
      id: crypto.randomUUID(),
      name: req.body.name,
      age: req.body.age,
      email: req.body.email
    }

    const user = await User.create(userToCreate)

    return res.status(201).json(user)
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro interno no servidor' })
  }
}

export const getAllusers = async (req, res) => {
  try {
    const users = await User.findAll()

    return res.status(200).json(users)
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro interno no servidor' })
  }
}

export const deleteUsers = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id }
    })

    return res.status(200).json({ message: 'Usuário deletado com sucesso' })
  } catch (err) {
    return res.status(500).json({ error: err.message || 'Erro interno no servidor' })
  }
}