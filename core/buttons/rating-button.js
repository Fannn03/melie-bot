import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js"

const ratingButton = () => {
  return new ButtonBuilder()
    .setCustomId('rating')
    .setLabel('🌟 Send Feedback Rating')
    .setStyle(ButtonStyle.Primary)
}

export default () => {
  return new ActionRowBuilder()
    .addComponents(ratingButton())
}