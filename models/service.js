import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

export default sequelize.define('services', {
  id: {
    type: DataTypes.STRING,
    unique: true,
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
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})