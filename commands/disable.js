module.exports = {
    name: 'disable',
    permissions: ['ADMINISTRATOR'],
    description: "disable ping pongs",
    async execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(':: __d__isable')
        .setDescription("・react to get rid of pings")
        .setColor('#e3d9ca')
        .setFooter('chari | 최소한의')
        message.channel.send(embed)
    }
}