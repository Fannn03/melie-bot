import { EmbedBuilder } from "discord.js";
import permissionMessage from "../../helper/permission-message.js";
import listService from "../../services/services/list-service.js";

export default {
  name: 'listservice',
  aliases: ['ls'],
  permissions: ['Chief Executive Officer', 'Moderator'],
  execute: async function(client, message, args) {
    if(!message.member.roles.cache.some(role => this.permissions.includes(role.name))) {
      return permissionMessage(message, this.permissions);
    }

    const services = await listService()
    return message.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Random")
          .setTitle("List Services")
          .setDescription(services)
          .setTimestamp()
          .setThumbnail(message.guild.iconURL())
      ]
    })
  }
}