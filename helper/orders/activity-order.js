import { ActivityType } from "discord.js"
import { countOrderAll } from "../../repositories/order.js"

export default async (client) => {
  const orders = await countOrderAll()

  client.user.setActivity({
    name: `${orders.count} orders`,
    state: 'online',
    type: ActivityType.Watching
  })
}