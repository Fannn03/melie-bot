import { EmbedBuilder, ModalBuilder } from 'discord.js'
import builderForm from '../../../core/forms/orders/builder.js'
import { getService } from '../../../repositories/service.js'

export default async (interaction) => {
  let modal = new ModalBuilder()
    .setCustomId('builder-form')
    .setTitle('Complete Builder Form')

  const validateService = await getService(interaction.customId)
  if(!validateService.dataValues.is_ready) {
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setDescription("Sorry, this service is not available right now")
      ],
      ephemeral: true
    })

    return setTimeout(async () => {
      await interaction.deleteReply()
    }, 5000)
  }
  
  let buttons = builderForm()
  modal.addComponents(buttons.fullname, buttons.phone, buttons.address, buttons.notes)

  return await interaction.showModal(modal)
}