//throwaway commands

module.exports = {
    name: 'extras',
    description: 'General throwaway commands.',
    async execute(message, args, bot) {
        let send;

        switch (args[0]) //switch for first arg
        {
            case "osupf": //send osu profile link
                send = `here ya go lazy ass: https://osu.ppy.sh/users/${args[1]}`;
                break;
        }
        message.channel.send(send);
    }
}