import { EmbedBuilder } from "discord.js";
import permissionMessage from "../../helper/permission-message.js"
import createOrderPage from "../../services/orders/create-order-page.js";

export default {
  name: 'createorder',
  aliases: ['co'],
  permissions: ['Bot', 'Melie Employee'],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
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