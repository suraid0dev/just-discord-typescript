import { Client, GatewayIntentBits, Partials } from "discord.js";
import dotenv from "dotenv"
dotenv.config()

const bot = new Client({
    intents: [
        GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions
    ],
    partials: [Partials.Channel]
})

bot.on('ready', () => {
    console.log(bot.user?.tag)
})

bot.login(process.env.TOKEN)