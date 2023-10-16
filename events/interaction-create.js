import { ButtonInteraction } from "discord.js"
import builder from "../services/orders/create/builder.js"

export default async (interaction) => {
  const { customId } = interaction

  if(interaction instanceof ButtonInteraction) {
    if(customId === 'builder') return builder(interaction)
  }
}