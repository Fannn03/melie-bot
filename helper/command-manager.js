import createOrder from "../commands/admin/create-order.js"

export default (client) => {
  let commands = []

  commands.push(createOrder)

  return client.commands = commands
}