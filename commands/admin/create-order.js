import { EmbedBuilder } from "discord.js";
import permissionMessage from "../../helper/permission-message.js"
import createFormPage from "../../services/forms/create-form-page.js";

export default {
  name: 'createorder',
  aliases: ['co'],
  permissions: ['Chief Executive Officer', 'Moderator'],
  execute: async function (client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

    try {
      await createFormPage(message)
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