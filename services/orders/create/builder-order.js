import { ChannelType, EmbedBuilder, PermissionFlagsBits, channelMention } from 'discord.js'
import 'dotenv/config'
import createOrderMessage from '../../../helper/messages/create-order.js'

export default async (interaction) => {
  const channelName = interaction.fields.getTextInputValue('fullname')

  try {
    const channel = await interaction.guild.channels.create({
      name: `❗👷${channelName}`,
      type: ChannelType.GuildText,
    })

    channel.setParent(process.env.CHANNEL_ORDER)
    // assign permission member after move channel into category
    await interaction.guild.channels.edit(channel.id, {
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles
          ]
        }
      ]
    })

    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Green")
          .setTitle("Order Created")
          .setDescription(`Please check your order ticket ${channelMention(channel.id)}`)
      ],
      ephemeral: true
    })
  
    await createOrderMessage(interaction.user.id, interaction.fields, channel)

    return setTimeout(async () => {
      await interaction.deleteReply()
    }, 5000)
  } catch (err) {
    await interaction.reply({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setTitle("Order Failed")
          .setDescription(err.message)
      ]
    })

    return setTimeout(async () => {
      await interaction.deleteReply()
    }, 5000)
  }
}