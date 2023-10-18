import { EmbedBuilder } from "discord.js";
import permissionMessage from "../../../helper/permission-message.js";
import orderStatus from "../../../services/orders/order-status.js";

export default {
  name: 'orderstatus',
  aliases: ['os'],
  params: [],
  description: "Display status order in specific channel",
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

    try {
      await orderStatus(client, message, args)
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