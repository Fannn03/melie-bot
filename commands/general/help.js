import { EmbedBuilder, inlineCode } from "discord.js"
import 'dotenv/config'
import permissionMessage from "../../helper/permission-message.js";

export default {
  name: 'help',
  aliases: ['bantuan'],
  permissions: ['Melie Corporation'],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

    if(args.length > 0) {
      if(args[0] === this.name ) return message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Yellow")
            .setDescription("you're gay")
        ]
      })

      for(let command of client.commands) {
        if(command.name == args[0]) {
          
        }
      }

      return message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Red")
            .setDescription(`Cannot found command name with value **${args[0]}**`)
        ]
      })
    }

    const text = `
    **General**
    ${inlineCode('help')}
    
    **Services**
    ${inlineCode('createservice')}, ${inlineCode('listservice')}, ${inlineCode('enableservice')}, ${inlineCode('disableservice')}
    
    **Orders**
    ${inlineCode('takeorder')}, ${inlineCode('orderstatus')}

    **Tips :**
    use ${inlineCode(`${process.env.BOT_PREFIX}${this.name}`)} **[command name]**, to get details of specified command!
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