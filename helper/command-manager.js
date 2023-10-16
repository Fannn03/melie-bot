import createOrder from "../commands/admin/create-order.js"
import createService from "../commands/admin/services/create-service.js"
import enableService from "../commands/admin/services/enable-service.js"
import listService from "../commands/admin/services/list-service.js"
import help from '../commands/general/help.js'

export default (client) => {
  let commands = []

  commands.push(createOrder)
  commands.push(help)
  commands.push(createService)
  commands.push(listService)
  commands.push(enableService)

  return client.commands = commands
}