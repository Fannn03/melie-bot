import { EmbedBuilder } from "discord.js";
import permissionMessage from "../../helper/permission-message.js"
import createOrderPage from "../../services/orders/create-order-page.js";

export default {
  name: 'createorder',
  aliases: ['co'],
  permissions: ['Moderator', 'Chief Executive Officer'],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message);
    }

    try {
      await createOrderPage(message)
      await message.reply('success create order page')
    } catch (err) {
      message.reply({
        embeds: [
          new EmbedBuilder()
            .setColor("Red")
            .setDescription(err.message)
        ]
      })
    }
  }
}