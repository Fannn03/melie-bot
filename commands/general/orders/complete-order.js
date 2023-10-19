export default {
  name: 'completeorder',
  aliases: ['finishorder', 'done'],
  params: [],
  description: "Finish current order, can be used if you've take this current order before",
  permissions: [
    'Chief Executive Officer',
    'Chief Operating Officer',
    'Head of Division',
    'Melie Corporation'
  ],
  execute: async function (client, message, args) {
    
  }
}