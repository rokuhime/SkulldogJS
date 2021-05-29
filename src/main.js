require("dotenv").config(); //for hiding key haha :^D

const fs = require('fs'); //file system

//get discord instance
const Discord = require("discord.js");
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  bot.commands.set(command.name, command);
}

const prefix = '~'; //prefix for every command
const color = "0xff8c96"; //colour for embeds
let commandsExecuted = 0; //commands since launch


//status, runs on startup
bot.on("ready", () => {
    console.log("bot online!");
    bot.user.setPresence({ activity: { name: 'Being ported to JS!' }, status: 'idle' });
})

//login
bot.login(process.env.DISCORDJS_BOT_TOKEN);

bot.on('message', (message) => { //when msg
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    
    if (!message.content.startsWith(prefix) || message.author.bot) return; //if doesnt start with prefix


    if (bot.commands.has(command)) {
        try {
          bot.commands.get(command).execute(message, args, bot); 
        } catch (err) {
          console.log(err);
        }
    }
});

module.exports = { 
    color: color
}