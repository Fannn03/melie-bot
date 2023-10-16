import { EmbedBuilder, inlineCode } from "discord.js"

export default {
  name: 'help',
  aliases: ['bantuan'],
  permissions: [],
  execute: async function (client, message, args) {

    const text = `
    **General**
    ${inlineCode('help')}
    
    **Services**
    ${inlineCode('createservice')}, ${inlineCode('listservice')}
    `

    return message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setTitle("Available Commands")
          .setDescription(text)
      ]
    })
  }
}