import createOrder from "../commands/admin/create-order.js"
import createService from "../commands/admin/create-service.js"
import help from '../commands/general/help.js'

export default (client) => {
  let commands = []

  commands.push(createOrder)
  commands.push(help)
  commands.push(createService)

  return client.commands = commands
}