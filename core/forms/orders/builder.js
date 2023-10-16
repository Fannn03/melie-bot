import { ActionRowBuilder, TextInputBuilder, TextInputStyle } from "discord.js"

const fullnameInput = () => {
  return new TextInputBuilder()
    .setCustomId('fullname')
    .setLabel('Fullname')
    .setPlaceholder('Simon Bahres')
    .setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setMinLength(5)
    .setMaxLength(32)
}

const phoneInput = () => {
  return new TextInputBuilder()
    .setCustomId('phone')
    .setLabel('Phone Number')
    .setPlaceholder('696969')
    .setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setMinLength(3)
    .setMaxLength(10)
}

const addressInput = () => {
  return new TextInputBuilder()
    .setCustomId('address')
    .setLabel('Address')
    .setPlaceholder('Ganton')
    .setStyle(TextInputStyle.Short)
    .setRequired(true)
    .setMinLength(3)
    .setMaxLength(100)
}

const notesInput = () => {
  return new TextInputBuilder()
    .setCustomId('notes')
    .setLabel('Notes')
    .setPlaceholder('Modern Japanese ( optional )')
    .setStyle(TextInputStyle.Paragraph)
    .setRequired(false)
}

export default () => {
  const buttons = {}

  const fullname = new ActionRowBuilder()
    .addComponents(fullnameInput())
  buttons.fullname = fullname

  const phone = new ActionRowBuilder()
    .addComponents(phoneInput())
  buttons.phone = phone

  const address = new ActionRowBuilder()
    .addComponents(addressInput())
  buttons.address = address

  const notes = new ActionRowBuilder()
    .addComponents(notesInput())
  buttons.notes = notes

  return buttons
}