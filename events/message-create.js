import 'dotenv/config'

const env = process.env

export default async (client, message) => {
  if(message.guildId === env.GUILD_ID && message.content.startsWith(env.BOT_PREFIX)) {
    const splitMessage = message.content.slice(process.env.BOT_PREFIX.length).split(" ")
    const commandName = splitMessage.shift()
    const args = splitMessage

    for (let command of client.commands) {
      if(commandName === command.name || command.aliases.includes(commandName)) {
        return command.execute(client, message, args)
      }
    }
  }
}