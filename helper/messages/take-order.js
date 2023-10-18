import { inlineCode, userMention } from "discord.js"

export default (clientId, staffId, price) => {
  let messages = ''

  messages += `Halo ${userMention(clientId)}, `
  messages += `${userMention(staffId)} telah mengambil orderan-mu dengan tarif ${inlineCode('$' + price)}.\n`
  messages += "Segala bentuk pertanyaan atau percakapan tentang orderan-mu bisa di diskusikan disini.\n"
  messages += "Terima kasih telah mempercayakan layanan kami."

  return messages
}