import { EmbedBuilder } from "discord.js";
import permissionMessage from "../../../helper/permission-message.js";
import takeOrder from "../../../services/orders/take-order.js";

export default {
  name: 'takeorder',
  aliases: ['to'],
  permissions: ['Melie Corporation'],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

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