import service from './service.js'
import order from './order.js'
import takeOrder from './take-order.js'

service.hasMany(order, {
  foreignKey: 'service_id'
})
order.hasOne(takeOrder, {
  foreignKey: 'order_id'
})

export default {
  service: service,
  order: order,
  takeOrder: takeOrder
}