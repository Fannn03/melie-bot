export default {
  name: 'help',
  aliases: ['bantuan'],
  permissions: [],
  execute: async function (client, message, args) {
    message.reply('test help command')
  }
}