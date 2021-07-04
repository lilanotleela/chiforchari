module.exports = {
    name: 'pong',
    cooldown: 10,
    permissions: [],
    description: "pong ping",
    execute(client, message, args){
        message.channel.send('ping');
    }
}