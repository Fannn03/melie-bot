import { getOrder, updateOrder } from "../../repositories/order.js"
import completeOrderMessage from "../../helper/messages/complete-order.js"

export default async (client, message, args) => {
  // validate if command has been executed in order channel
  const getChannelOrder = await getOrder(message.channelId)
  if(!getChannelOrder) throw new Error("You can only use this command in order channel!")
  if(getChannelOrder.dataValues.status !== "process") throw new Error("You can only use this command only if status order already **process**!")
  if(getChannelOrder.order_take.dataValues.user_id !== message.author.id) throw new Error("You have to take this order first!")

  try {
    await updateOrder({
      status: 'complete'
    }, getChannelOrder.dataValues.channel_id)

    message.guild.channels.cache.find(channel => channel.id == message.channelId).setName("✅👷" + getChannelOrder.dataValues.fullname)
    
    const messageContent = completeOrderMessage(getChannelOrder.dataValues.user_id, message.author.id, getChannelOrder, message)
    await message.reply({
      content: messageContent.content,
      embeds: [messageContent.embed]
    })
  } catch (err) {
    throw err
  }
}