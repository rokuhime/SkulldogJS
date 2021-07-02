const Discord = require("discord.js");
const { colour } = require("../main.js");

module.exports = {
    name: 'version',
    description: 'Displays version of the bot.',
    async execute(message, args, bot) {
        const embed = new Discord.MessageEmbed()
        .setTitle("SkulldogJS V0.1")
        .setDescription(`Created by fus!#3905, last updated 02/07/2021`)
        .setColor(colour);
        
        embed.addField("~Update log 02/07/2021", "finally made a version command and fixed help! weeew");
        
        message.channel.send(embed);
    }

}