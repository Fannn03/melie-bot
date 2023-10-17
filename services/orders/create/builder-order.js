import { ChannelType, EmbedBuilder, PermissionFlagsBits, channelMention } from 'discord.js'
import 'dotenv/config'
import createOrderMessage from '../../../helper/messages/create-order.js'
import { getService } from '../../../repositories/service.js'
import { countOrder, createOrder } from '../../../repositories/order.js'
import activityOrder from '../../../helper/orders/activity-order.js'

export default async (interaction) => {
  const fullname = interaction.fields.getTextInputValue('fullname')
  const phone = interaction.fields.getTextInputValue('phone')
  const address = interaction.fields.getTextInputValue('address')
  const notes = interaction.fields.getTextInputValue('notes')

  try {
    await interaction.deferReply()
    const service = await getService('builder')

    // Check if user already has 3 pending or unfinished order
    const validateOrder = await countOrder(interaction.user.id)
    if(validateOrder.count >= 3) throw new Error("You've already 3 pending or process order that hasn't complete")

    const channel = await interaction.guild.channels.create({
      name: `❗👷${fullname}`,
      type: ChannelType.GuildText,
    })

    const request = {
      serviceId: service.dataValues.id,
      channelId: channel.id,
      userId: interaction.user.id,
      fullname: fullname,
      phone: phone,
      address: address,
      notes: notes
    }

    await createOrder(request) // insert data to sql

    channel.setParent(process.env.CHANNEL_ORDER)
    // Get @everyone role id
    const everyone = interaction.guild.roles.cache.find(role => role.id == interaction.guild.id)
    // assign permission member after move channel into category
    await interaction.guild.channels.edit(channel.id, {
      permissionOverwrites: [
        {
          id: interaction.user.id,
          allow: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages,
            PermissionFlagsBits.AttachFiles
          ],
        },
        {
          id: everyone.id,
          deny: [
            PermissionFlagsBits.ViewChannel,
            PermissionFlagsBits.SendMessages
          ]
        }
      ]
    })

    await interaction.user.send({
      embeds: [
        new EmbedBuilder()
          .setColor("Green")
          .setTitle("Order Created")
          .setDescription(`Please check your order ticket ${channelMention(channel.id)}`)
          .setTimestamp()
          .setThumbnail(interaction.guild.iconURL())
      ],
      ephemeral: true
    })
  
    await createOrderMessage(interaction.user.id, interaction.fields, channel)
    // update activity bot
    await activityOrder(interaction.client)

    return setTimeout(async () => {
      await interaction.deleteReply()
    }, 5000)
  } catch (err) {
    await interaction.user.send({
      embeds: [
        new EmbedBuilder()
          .setColor("Red")
          .setTitle("Order Failed")
          .setDescription(err.message)
          .setTimestamp()
          .setThumbnail(interaction.guild.iconURL())
      ]
    })

    return setTimeout(async () => {
      await interaction.deleteReply()
    }, 5000)
  }
}