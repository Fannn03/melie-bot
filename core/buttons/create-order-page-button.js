import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js"

const builderButton = () => {
  return new ButtonBuilder()
    .setCustomId('builder')
    .setLabel('👷 Builder')
    .setStyle(ButtonStyle.Primary)
}

export default () => {
  return new ActionRowBuilder()
    .addComponents(builderButton())
}