import express from 'express'
import userRoutes from './routes.js'
import User from './models/User.js'
import Sequelize from 'sequelize'
import config from './config/database.cjs'

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)

User.init(sequelize)

app.use('/usuarios', userRoutes)

sequelize.authenticate().then(() => {
  app.listen(3000, () => console.log("servidor rodando na porta 3000 ok"))
}).catch(err => {
  console.error(err)
})