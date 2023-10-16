import { EmbedBuilder } from "discord.js";
import permissionMessage from "../../../helper/permission-message.js";
import enableService from "../../../services/services/enable-service.js";

export default {
  name: 'enableservice',
  aliases: ['es'],
  permissions: ['Chief Executive Officer', 'Moderator'],
  execute: async function(client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

    if(args.length < 1) return await message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setDescription(`**Usage :** \`${process.env.BOT_PREFIX}${this.name}\` [service id]`)
      ]
    })

    try {
      const service = await enableService(args[0])

      return await message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Green")
            .setDescription(`Success enable service **${service.dataValues.name}**`)
        ]
      })
    } catch (err) {
      return message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Red")
            .setDescription(err.message)
        ]
      })
    }
  }
}