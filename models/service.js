import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

export default sequelize.define('services', {
  id: {
    type: DataTypes.STRING,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    unique: {
      args: true,
      msg: 'Nama Service sudah terpakai'
    },
    allowNull: false
  },
  is_ready: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
})