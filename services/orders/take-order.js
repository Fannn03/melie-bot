import { getOrder, updateOrder } from "../../repositories/order.js"
import { createTakeOrder } from "../../repositories/take-order.js"
import takeOrderMessage from "../../helper/messages/take-order.js"
import { userMention } from "discord.js"

export default async (client, message, args) => {
  // validate if command has been executed in order channel
  const getChannelOrder = await getOrder(message.channelId)

  if(!getChannelOrder) throw new Error("You can only use this command in order channel!")
  if(getChannelOrder.dataValues.user_id == message.author.id) throw new Error("You cannot take your own order!")

  const request = {
    orderId: getChannelOrder.dataValues.id,
    userId: message.author.id,
    price: args
  }

  try {
    await createTakeOrder(request)
    await updateOrder({
      status: 'process'
    }, getChannelOrder.dataValues.channel_id)

    message.guild.channels.cache.find(channel => channel.id == message.channelId).setName("⌛👷" + getChannelOrder.dataValues.fullname)

    await message.reply(takeOrderMessage(getChannelOrder.dataValues.user_id, message.author.id, request.price))
  } catch (err) {
    if (err.name == "SequelizeUniqueConstraintError" && getChannelOrder.order_take.dataValues.user_id == message.author.id) {
      throw new Error("You have already take this order!")
    }else if (err.name == "SequelizeUniqueConstraintError" && getChannelOrder.order_take.dataValues.user_id != message.author.id) {
      throw new Error(`This order has been taken by ${userMention(getChannelOrder.order_take.dataValues.user_id)}`)
    }
    throw err
  }
}