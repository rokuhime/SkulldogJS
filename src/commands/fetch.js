//ping command

module.exports = {
    name: 'fetch',
    description: 'REPLACE DESCRIPTION',
    execute(message, args, bot) {
        message.channel.send("Arf arf! " + (message.createdTimestamp - Date.now()) + "ms delay.");
    },
  };