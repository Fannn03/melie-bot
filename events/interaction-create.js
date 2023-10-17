import { ButtonInteraction, ModalSubmitInteraction } from "discord.js"
import builderForm from "../services/forms/create/builder-form.js"
import createOrder from "../services/orders/create/builder-order.js"

export default async (interaction) => {
  const { customId } = interaction

  if(interaction instanceof ButtonInteraction) {
    if(customId === 'builder') return builderForm(interaction)
  }

  if(interaction instanceof ModalSubmitInteraction) {
    if(customId === 'builder-order') return createOrder(interaction)
  }
}