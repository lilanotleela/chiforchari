module.exports = {
    name: 'ping',
    cooldown: 10,
    permissions: [],
    description: "ping pong",
    execute(client, message, args){
        message.channel.send("pong")
    }

    }
