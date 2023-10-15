import { ButtonInteraction } from "discord.js"
import createOrder from "../services/orders/create-order.js"

export default async (interaction) => {
  const { customId } = interaction

  if(interaction instanceof ButtonInteraction) {
    if(customId === 'builder') return createOrder(interaction)
  }
}