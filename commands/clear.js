module.exports = {
    name: 'clear',
    permissions: ['ADMINISTRATOR'],
    description: "clear messages at once",
    async execute(client, message, args){
        if(!args[0]) return message.reply("dumb dumb you didnt put a number");
        if(isNaN(args[0])) return message.reply("bestie you didnt put a number");

        if(args[0] > 100) return message.reply("bestie why u deleting 100+ messages? what u hiding?");
        if(args[0] < 1) return message.reply("wtf. just- i have no words");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages)
        });
    }
}