import { Client, GatewayIntentBits } from 'discord.js'
import 'dotenv/config'
import messageCreate from './events/message-create.js';
import commandManager from './helper/command-manager.js';
import interactionCreate from './events/interaction-create.js';

const client = new Client({
  intents: [
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds
  ]
})

client.on('ready', () => {
  commandManager(client)
  console.log(`loaded ${client.commands.length} commands`);
  console.log('bot is ready');
  console.log(client.commands);
})

client.on('messageCreate', (message) => {
  return messageCreate(client, message)
})

client.on('interactionCreate', (interaction) => {
  return interactionCreate(interaction)
})

client.login(process.env.BOT_TOKEN)