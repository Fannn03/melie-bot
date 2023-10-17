import { EmbedBuilder } from "discord.js"
import 'dotenv/config'
import createOrderPage from "../../helper/messages/create-order-page.js"
import orderPageButton from '../../core/buttons/create-order-page-button.js'

export default async (message) => {
  const channel = message.guild.channels.cache.find(channel => channel.id == process.env.CHANNEL_CO) 

  const embed = new EmbedBuilder()
    .setColor("Green")
    .setTitle("Order Services")
    .setDescription(createOrderPage())
    .setThumbnail(message.guild.iconURL())
    .setTimestamp()

  const components = orderPageButton()

  return channel.send({
    embeds: [embed],
    components: [components]
  })
}