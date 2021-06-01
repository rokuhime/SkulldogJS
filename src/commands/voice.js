//ping command
let connection;

module.exports = {
    name: 'voice',
    description: 'Voice related commands.',
    async execute(message, args, bot) {
        let send;

        switch (args[0]) //switch for first arg
        {
            case "test":
                if (message.member.voice.channel) {
                    connection = await message.member.voice.channel.join();
                }
                simplePlay("test");
                send = `Recieved! Playing in #${message.member.voice.channel.name}.`;
                break;

            case "omg":
                if (message.member.voice.channel) {
                    connection = await message.member.voice.channel.join();
                }
                simplePlay("omg");
                send = `Recieved! Playing in ${message.member.voice.channel.name}.`;
                break;

            case "omg2":
                if (message.member.voice.channel) {
                    connection = await message.member.voice.channel.join();
                }
                simplePlay("omg2");
                send = `Recieved! Playing in ${message.member.voice.channel.name}.`;
                break;

                ///////////////////////////////////////////////////////////////////////////////

            case "join":
                if (message.member.voice.channel) {
                    connection = await message.member.voice.channel.join();
                }
                send = `Recieved! Joining ${message.member.voice.channel.name}.`;
                break;
            case "leave":
                connection.disconnect();
                send = `Recieved! Left current VC.`;
                break;
            default: //catch all
                send = "Invalid arguments! Please use `~voice help`.";
                break;
        }

        if (send != null) message.channel.send(send);
    },
};

async function simplePlay(audioname)
{
    let dispatcher = connection.play(`/home/fus/Desktop/Creative/SkulldogJS/save/audio/${audioname}.mp3`);

    dispatcher.on('start', () => {
        console.log(`${audioname}.mp3 is now playing!`);
    });

    dispatcher.on('finish', () => {
        console.log(`${audioname}.mp3 has finished playing!`);
        connection.disconnect();
    });
}