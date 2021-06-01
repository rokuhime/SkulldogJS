//ping command

module.exports = {
    name: 'fetch',
    description: 'REPLACE DESCRIPTION',
    execute(message, args, bot) {
        message.channel.send("Arf arf! " + (Date.now() - message.createdTimestamp) + "ms delay.");
    },
  };