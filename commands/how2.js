module.exports = {
    name: 'how2',
    permissions: ['ADMINISTRATOR'],
    description: "how to make a ticket",
    async execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(':: __o__pen')
        .setDescription("・read my status \n・use `.ticket`")
        .setColor('#e3d9ca')
        .setFooter('chari | 최소한의')
        message.channel.send(embed)
    }
}