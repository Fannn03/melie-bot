import { EmbedBuilder, codeBlock, userMention } from "discord.js"
import { getOrder } from "../../repositories/order.js"

export default async (client, message, args) => {
  const getChannelOrder = await getOrder(message.channelId)

  if(!getChannelOrder) throw new Error("You can only use this command in order channel!")

  let messages = ''
  messages += `**Client :** ${userMention(getChannelOrder.dataValues.user_id)}\n`
  messages += `**Status :** ${getChannelOrder.dataValues.status}\n`
  messages += `**Phone :** ${getChannelOrder.dataValues.phone}\n`
  messages += `**Address :** ${getChannelOrder.dataValues.address}\n`

  if(getChannelOrder.order_take && getChannelOrder.order_take.dataValues.user_id) {
    messages += `**Taken by :** ${userMention(getChannelOrder.order_take.dataValues.user_id)}\n`
  }else {
    messages += "**Taken by :** -\n"
  }

  if(getChannelOrder.dataValues.notes !== " ") {
    messages += `**Notes :**\n ${codeBlock(getChannelOrder.dataValues.notes)}`
  }else {
    messages += `**Notes :** -`
  }

  const embed = new EmbedBuilder()
    .setTitle("Order Status")
    .setDescription(messages)
    .setThumbnail(message.guild.iconURL())

  if(getChannelOrder.dataValues.status == "pending") embed.setColor("Red")
  else if (getChannelOrder.dataValues.status == "process") embed.setColor("Yellow")
  else if (getChannelOrder.dataValues.status == "complete") embed.setColor("Green")
  else embed.setColor("DarkGrey")

  message.reply({
    embeds: [embed]
  })

}