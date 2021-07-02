const flagModel = require('../../database/models/flags.js');
const Discord = require("discord.js");
const { colour } = require("../main.js");

//todo: dm stuff? ask f0ne about it again
// count -> countDOcuments

module.exports = {
    name: 'flag',
    description: 'Sends random or requested flags.',
    async execute(message, args, bot) {
        let send;
        switch (args[0]) //switch for first arg
        {
            case "create": //create addition to database
                let flagSet = new flagModel({
                    id: await flagLength(),
                    name: restofargslol(args, 2),
                    image: args[1]
                }).save().then(result => {
                    message.channel.send('Flag added!');
                    console.log(`flag entry added for ${result.name}!`);
                })
                    .catch(err => console.log(err));
                break;

            case "delete": //delete 
                flagModel.findOneAndDelete({
                    id: args[1]
                }, function (err, result) {
                    if (err) throw err;
                    if (result) {
                        message.channel.send("Flag deleted!");
                        console.log(`flag deleted at id ${args[1]}`);
                    } else {
                        message.channel.send("Invalid ID given!");
                        console.log(`flag failed to delete at id ${args[1]}`);
                    }
                }).catch(err => console.log(err));
                break;

            case "id":
                flagModel.find({
                    id: args[1]
                }, function (err, results) {
                    if (err) throw err;
                    if (results.length) {
                        // interact with data
                        results = results[0];
                        console.log(`flag ${results.name} called!`);
                        message.channel.send(GenerateEmbed(message, results));
                    } else {
                        message.channel.send("Error getting flag!");
                    }
                }).catch(err => console.log(err));
                break;

            case "length":
                let fuck = await flagLength();
                message.channel.send(`${fuck} flags in database!`);
                break;

            default:
                let rngid = (Math.random() * await flagLength()) | 0; //rng for how many flags are in db

                flagModel.find({
                    id: rngid
                }, function (err, results) {
                    if (err) throw err;
                    if (results.length) {
                        // interact with data
                        results = results[0];
                        console.log(`flag ${results.name} called!`);
                        message.channel.send(GenerateEmbed(message, results));
                    } else {
                        message.channel.send("Error getting flag!");
                    }
                }).catch(err => console.log(err));
        }
    }
}

function GenerateEmbed(message, flag) {
    const embed = new Discord.MessageEmbed()
        .setTitle(flag.name)
        .setDescription(`Called by ${message.author.username}`)
        .setImage(flag.image)
        .setColor(colour);
    return embed;
}

async function flagLength() {
    return await flagModel.count({}, function (err, count) {
        return count;
    })
}

function restofargslol(args, start) {
    let rest = "";
    for (let i = start; i < args.length; i++) {
        rest += args[i] + " ";
    }
    rest = rest.substring(0, rest.length - 1);
    return rest;
}