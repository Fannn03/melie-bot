import { EmbedBuilder } from "discord.js";
import disableService from "../../../services/services/disable-service.js";
import permissionMessage from "../../../helper/permission-message.js";

export default {
  name: 'disableservice',
  aliases: ['ds'],
  permissions: ['Chief Executive Officer', 'Moderator', 'Head of Division'],
  execute: async function (client, message, args) {
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
      const service = await disableService(args[0])

      return await message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Green")
            .setDescription(`Success disable service **${service.dataValues.name}**`)
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