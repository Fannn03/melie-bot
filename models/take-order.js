import { DataTypes } from 'sequelize'
import sequelize from '../config/sequelize.js'

export default sequelize.define('order_takes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  order_id: {
    type: DataTypes.INTEGER,
    unique: true,
    references: {
      model: 'orders',
      key: 'id'
    },
    allowNull: false
  },
  user_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})