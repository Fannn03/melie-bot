import { EmbedBuilder } from "discord.js"

export default (message) => {
  return message.reply({
    embeds: [
      new EmbedBuilder()
        .setColor('Red')
        .setTitle('Missing permissions')
        .setDescription("You don't have permission to use this commands")
    ]
  })
}