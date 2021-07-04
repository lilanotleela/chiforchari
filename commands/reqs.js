module.exports = {
    name: 'reqs',
    permissions: ['ADMINISTRATOR'],
    description: "reqs",
    async execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(':: __r__eqs')
        .setDescription("・sfw + nontoxic \n・follows dtos + gls")
        .setColor('#e3d9ca')
        .setFooter('chari | 최소한의')
        message.channel.send(embed)
    }
}