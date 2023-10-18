import { Client, GatewayIntentBits } from 'discord.js'
import 'dotenv/config'
import messageCreate from './events/message-create.js';
import interactionCreate from './events/interaction-create.js';
import ready from './events/ready.js';

const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds
  ]
})

client.on('ready', () => {
  return ready(client)
})

client.on('messageCreate', (message) => {
  return messageCreate(client, message)
})

client.on('interactionCreate', (interaction) => {
  return interactionCreate(interaction)
})

client.login(process.env.BOT_TOKEN)