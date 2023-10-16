import { Sequelize } from 'sequelize'
import 'dotenv/config'

const env = process.env
export default new Sequelize(env.DB_DATABASE, env.DB_USERNAME, env.DB_PASSWORD, {
  host: env.DB_HOST,
  dialect: env.DB_DIALECT,
  logging: false
})