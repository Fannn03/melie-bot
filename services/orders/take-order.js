import { getOrder } from "../../repositories/order.js"

export default async (client, message, args) => {
  // validate if command has been executed in order channel
  const getChannelOrder = await getOrder(message.channelId)
  if(!getChannelOrder) throw new Error("You can only use this command in order channel!")

  return message.reply('ini adalah channel order')
}