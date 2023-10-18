import { EmbedBuilder, inlineCode } from "discord.js"
import permissionMessage from "../../helper/permission-message.js";

export default {
  name: 'help',
  aliases: ['bantuan'],
  permissions: ['Melie Corporation'],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

    const text = `
    **General**
    ${inlineCode('help')}
    
    **Services**
    ${inlineCode('createservice')}, ${inlineCode('listservice')}, ${inlineCode('enableservice')}, ${inlineCode('disableservice')}
    
    **Orders**
    ${inlineCode('takeorder')}
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