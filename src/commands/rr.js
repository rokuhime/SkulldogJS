//russian roulette game

//basic
const Discord = require("discord.js");
const { colour } = require("../main.js");

//local
let survived = true;



module.exports = {
    name: 'rr',
    description: 'russian roulette',
    execute(message, args, bot) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Russian Roulette")
        .setDescription("Let the odds ever be in your favour, " + message.author.username + ".")
        .addField('\u200B', `${result() + "\n" + quip()}`, true)
        .setColor(colour);
        message.channel.send(embed);
    },
};

function result() 
{
    survived = true;
    //basic 1-6 holes, shooting 2nd slot
    let roll = (Math.random() * 6) | 0; //1-6

    holes = [":black_circle:", ":cloud:", ":black_circle:", ":black_circle:", ":black_circle:", ":black_circle:"];
    
    if (roll == 1) 
    {
        holes[1] = ":boom:"; //if roll 2nd slot, make 2nd hole shoot
        survived = false;
    }
    else holes[roll] = ":yellow_circle:"; //else put bullet in its place
    
    //draw gun
    let result = "\u2800" + holes[0] + holes[1];
    result += "\n" + holes[2] + "\u2800\u2800" + holes[3];
    result += "\n" + "\u2800" + holes[4] + holes[5];
    
    return result;
}

function quip()
{
    let num = 0;
    let quiptxt = "";

    if (survived) //if alive
    {
        num = ((Math.random() * 3) + 1) | 0;
        switch (num) {
            case 1:
                quiptxt = "Still kickin\'!";
                break;
            case 2:
                quiptxt = "Nice aim, bud.";
                break;
            case 3:
                quiptxt = "Ya make it look easy.";
                break;
            }
    }
    else //if dead
    {
        num = ((Math.random() * 4) + 1) | 0;
					switch (num) {
					case 1:
						quiptxt = "Oh. Oh...";
						break;
					case 2:
						quiptxt = "Pop goes the weasel!";
						break;
					case 3:
						quiptxt = "All over my new carpet? At least have some decency!";
						break;
					case 4:
						quiptxt = "That's not how you paint a pretty picture.";
						break;
					}
    }

    return quiptxt;
}