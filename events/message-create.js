import { EmbedBuilder } from 'discord.js'
import 'dotenv/config'

const env = process.env
const cooldown = new Set()

export default async (client, message) => {
  if(message.guildId === env.GUILD_ID && message.content.startsWith(env.BOT_PREFIX)) {
    const splitMessage = message.content.slice(process.env.BOT_PREFIX.length).split(" ")
    const commandName = splitMessage.shift()
    const args = splitMessage

    for (let command of client.commands) {
      if(commandName === command.name || command.aliases.includes(commandName)) {
        if(cooldown.has(message.author.id)) return message.reply({
          embeds: [
            new EmbedBuilder()
              .setColor('Red')
              .setDescription(`Please avoid spamming bot **commands**!`)
          ]
        })

        command.execute(client, message, args)
        cooldown.add(message.author.id)
        return setTimeout(() => {
          cooldown.delete(message.author.id)
        }, 5000)
      }
    }

    return message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor('Red')
          .setDescription(`Unknown command, use \`${env.BOT_PREFIX}help\` to see list all commands`)
      ]
    })
  }
}