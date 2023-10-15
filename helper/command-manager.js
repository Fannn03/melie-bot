import createOrder from "../commands/admin/create-order.js"
import help from '../commands/general/help.js'

export default (client) => {
  let commands = []

  commands.push(createOrder)
  commands.push(help)

  return client.commands = commands
}