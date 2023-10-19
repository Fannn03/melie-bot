import { EmbedBuilder } from "discord.js";
import 'dotenv/config'
import permissionMessage from "../../../helper/permission-message.js";
import takeOrder from "../../../services/orders/take-order.js";

export default {
  name: 'takeorder',
  aliases: ['to'],
  params: ["price"],
  description: "Take available request order from client. use this command in **specified channel order**, and order status must be **pending**",
  permissions: [
    'Chief Executive Officer',
    'Chief Operating Officer',
    'Head of Division',
    'Melie Corporation'
  ],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

    if(args.length < 1) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setDescription(`**Usage :** \`${process.env.BOT_PREFIX}${this.name}\` [set price this order]`)
      ]
    })

    if(isNaN(args[0])) return message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setDescription(`Invalid price format number. Do not use any string characters!\n\n**Example :** \`${process.env.BOT_PREFIX}${this.name}\` 15000`)
      ]
    })

    try {
      await takeOrder(client, message, args)
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