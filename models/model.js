import service from './service.js'
import order from './order.js'

service.hasMany(order, {
  foreignKey: 'service_id'
})

export default {
  service: service,
  order: order
}