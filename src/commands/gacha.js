const fs = require('fs'); //file system
const tools = require("../tools.js");

module.exports = {
    name: 'gacha',
    description: 'gacha general command',
    execute(message, args, bot) {
        let send;
        //let us = tools.GetUS(message.author);       


        switch(args[0]) //switch for first arg
        {
            case "save":
                tools.SaveUser(message.author);
                send = "done";
                break;
            case "add":
                id = args[1];
                tools.AddGacha(message.author, id);
                send = "done";
                break;
            case "dev":
                let user = tools.LoadUser(message.author);
                send = `user:\n${user}`;
                break;
            default: //catch all
                send = "Invalid arguments! Please use `~gacha help`.";
                break;
        }

        if (send != null) message.channel.send(send);
    },
};

