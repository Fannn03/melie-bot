import { Op } from 'sequelize'
import model from '../models/model.js'

const order = model.order

export const createOrder = async (request) => {
  try {
    await order.create({
      service_id: request.serviceId,
      channel_id: request.channelId,
      user_id: request.userId,
      fullname: request.fullname,
      phone: request.phone,
      address: request.address,
      notes: request.notes
    })
  } catch (err) {
    throw err
  }
}

export const countOrder = async (id) => {
  return await order.findAndCountAll({
    where: {
      user_id: id,
      status: {
        [Op.or]: ['pending', 'process']
      }
    }
  })
}