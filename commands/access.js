module.exports = {
    name: 'access',
    permissions: ['ADMINISTRATOR'],
    description: "access embed",
    async execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(':: __a__ccess')
        .setDescription("・react with the emoji to gain srvr access")
        .setColor('#e3d9ca')
        .setFooter('chari | 최소한의')
        message.channel.send(embed)
    }
}