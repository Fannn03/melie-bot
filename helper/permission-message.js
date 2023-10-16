import { EmbedBuilder, roleMention } from "discord.js"

export default async(message, permissions) => {

  let roles = ''
  await permissions.map(role => {
    const findRole = message.guild.roles.cache.find(data => data.name === role)
    roles += roleMention(findRole.id)
  })

  let text = ''

  text += "You don't have permission to use this commands\n\n"
  text += `**Required roles :** ${roles}`

  return message.reply({
    embeds: [
      new EmbedBuilder()
        .setColor('Red')
        .setTitle('Missing permissions')
        .setDescription(text)
    ]
  })
}