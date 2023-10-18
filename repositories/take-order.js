import model from '../models/model.js'

const takeOrder = model.takeOrder

export const createTakeOrder = async (request) => {
  try {
    await takeOrder.create({
      order_id: request.orderId,
      user_id: request.userId,
      price: request.price
    })
  } catch (err) {
    throw err
  }
}