import { EmbedBuilder, userMention } from "discord.js"
import moment from 'moment'

moment.locale('id')

export default (clientId, staffId, order, message) => {
  let messages = ''

  messages += `Halo ${userMention(clientId)}, `
  messages += `${userMention(staffId)} telah menyelesaikan orderan mu. Terima kasih telah mempercayakan layanan kami.\n`

  let embed = new EmbedBuilder()
    .setColor("Random")
    .setTitle("Order status")
    .setDescription(`**Order Created :** ${moment(order.dataValues.createdAt).format('dddd, Do MMMM YYYY | \`H:mm\`')}\n**Order Completed :** ${moment(order.dataValues.updatedAt).format('dddd, Do MMMM YYYY | \`H:mm\`')}`)
    .setThumbnail(message.guild.iconURL())

  return {
  content: messages,
  embed: embed
  }
}