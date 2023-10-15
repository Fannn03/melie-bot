import help from "../commands/general/help.js"

export default (client) => {
  let commands = []

  commands.push(help)

  return client.commands = commands
}