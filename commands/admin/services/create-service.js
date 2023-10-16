import { EmbedBuilder } from "discord.js";
import 'dotenv/config'
import permissionMessage from "../../../helper/permission-message.js";
import createService from "../../../services/services/create-service.js";

export default {
  name: 'createservice',
  aliases: ['cs'],
  permissions: ['Chief Executive Officer', 'Moderator'],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

    if(args.length < 1) return await message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setDescription(`**Usage :** \`${process.env.BOT_PREFIX}${this.name}\` [service name]`)
      ]
    })

    try {
      const service = await createService(args[0])
      return message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Green")
            .setTitle('Service Created')
            .setDescription(`Service **${service.dataValues.name}** successfully created`)
        ]
      })
    } catch (err) {
      return await message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Red")
            .setDescription(err.message)
        ]
      })
    }
  }
}