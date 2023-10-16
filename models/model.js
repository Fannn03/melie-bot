import service from './service.js'
import order from './order.js'

service.hasMany(order)

export default {
  service: service,
  order: order
}