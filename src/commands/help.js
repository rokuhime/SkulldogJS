const fs = require('fs'); //file system, just if i wana do the automated version

const Discord = require("discord.js");
const { colour } = require("../main.js");

module.exports = {
    name: 'help',
    description: 'You\'re here right now, silly!',
    async execute(message, args, bot) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setDescription(`Currently 3 commands!`)
        .setColor(colour);
        
        embed.addField("~help", "You\'re here right now, silly!", true);
        embed.addField("~version", "Shows current version of the bot.", true);
        embed.addField("~fetch", "Simple ping command.");
        embed.addField("~rr", "Russian roulette game.", true);
        embed.addField("~flag", "Sends random or requested flags.", true);
        embed.addField("~voice", "Voice related commands.");
        embed.addField("~extras", "Small throwaway commands.");
        
        message.channel.send(embed);
    }

}

//automated version, not a fan though

/*const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));
module.exports = {
    name: 'help',
    description: 'You\'re here right now, silly!',
    async execute(message, args, bot) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Help")
        .setDescription(`Currently ${commandFiles.length} commands!`)
        .setColor(colour);
        
        let i = 0;
        for (const file of commandFiles)
        {
            const command = require(`${process.cwd()}/src/commands/${file}`);
            if (command.ignore) return;
            i++;
            if (i % 3 == 0) embed.addField(command.name, command.description, true);
            else embed.addField(command.name, command.description);
        }
        

        message.channel.send(embed);
    }
}*/