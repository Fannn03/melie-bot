import { codeBlock, userMention } from "discord.js"

export default async (userId, value, channel) => {
  const fullname = value.getTextInputValue('fullname')
  const phone = value.getTextInputValue('phone')
  const type = value.getTextInputValue('type')
  const address = value.getTextInputValue('address')
  const notes = (value.getTextInputValue('notes')) ? value.getTextInputValue('notes') : '-'

  let messages = ''
  messages += `Fullname      : ${fullname}\n`
  messages += `Phone Number  : ${phone}\n`
  messages += `Property Type : ${type}\n`
  messages += `Address       : ${address}\n\n`
  messages += `Notes :\n${notes}\n`

  return channel.send(codeBlock(messages) + '\n' + userMention(userId))
}