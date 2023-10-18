import { EmbedBuilder, inlineCode } from "discord.js"
import 'dotenv/config'
import permissionMessage from "../../helper/permission-message.js";

const prefix = process.env.BOT_PREFIX

export default {
  name: 'help',
  aliases: ['h', 'bantuan'],
  params: ["command name"],
  description: "Show available bot commands",
  permissions: ['Melie Corporation'],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

    if(args.length > 0) {
      for(let command of client.commands) {
        if(command.name == args[0]) {
          let messages = ""

          const aliases = command.aliases.map(data => {
            return inlineCode(data)
          }).join(", ")
          const params = command.params.map(data => {
            return `(${data})`
          }).join(", ")

          messages += `**Usage :** ${inlineCode(prefix + command.name)}\n`
          messages += `**Aliases :** ${aliases}\n`
          messages += `**Parameter :** ${params}\n\n`
          messages += `**Description :**\n${command.description}`

          return message.reply({
            embeds: [
              new EmbedBuilder()
                .setColor("Green")
                .setDescription(messages)
            ]
          })
        }
      }

      return message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Red")
            .setDescription(`Cannot find command name with value **${args[0]}**`)
        ]
      })
    }

    const text = `
    **General**
    ${inlineCode('help')}
    
    **Services**
    ${inlineCode('createservice')}, ${inlineCode('listservice')}, ${inlineCode('enableservice')}, ${inlineCode('disableservice')}
    
    **Orders**
    ${inlineCode('createorder')} ${inlineCode('takeorder')}, ${inlineCode('orderstatus')}

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