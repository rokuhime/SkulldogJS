require("dotenv").config(); //for hiding key haha :^D

//get discord instance
const Discord = require("discord.js");
const bot = new Discord.Client();

const prefix = '~'; //prefix for every command

let commandsExecuted = 0; //commands since launch

//status, runs on startup
bot.on("ready", () => {
    console.log("bot online!");
    bot.user.setPresence({ activity: { name: 'Being ported to JS!' }, status: 'idle' });
})

bot.login(process.env.DISCORDJS_BOT_TOKEN);