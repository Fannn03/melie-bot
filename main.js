import { Client, GatewayIntentBits } from 'discord.js'
import 'dotenv/config'

const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds
  ]
})

client.on('ready', () => {
  console.log('bot is ready');
})

client.login(process.env.BOT_TOKEN)