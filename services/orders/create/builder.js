import { ModalBuilder } from 'discord.js'
import builderForm from '../../../core/forms/orders/builder.js'

export default async (interaction) => {
  const { customId } = interaction

  let modal = new ModalBuilder()
    .setCustomId('builder-form')
    .setTitle('Complete Builder Form')
  
  let buttons   
  if(customId == 'builder') {
    buttons = builderForm()
    modal.addComponents(buttons.fullname, buttons.phone, buttons.address, buttons.notes)
  }

  return await interaction.showModal(modal)
}