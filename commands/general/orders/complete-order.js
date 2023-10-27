import { EmbedBuilder } from "discord.js";
import completeOrder from "../../../services/orders/complete-order.js";

export default {
  name: 'completeorder',
  aliases: ['finishorder', 'done'],
  params: [],
  description: "Finish current order, can be used if you've take this current order before",
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
      await completeOrder(client, message, args)
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