import { ActivityType } from "discord.js";
import commandManager from "../helper/command-manager.js";
import { countOrderAll } from "../repositories/order.js";

export default async (client) => {
  commandManager(client)
  console.log(`loaded ${client.commands.length} commands`);

  const orders = await countOrderAll()
  client.user.setActivity({
    name: `${orders.count} orders`,
    state: 'online',
    type: ActivityType.Watching
  })

  console.log(`watching ${orders.count} orders`);
  console.log('bot is ready');
}