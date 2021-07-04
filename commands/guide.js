module.exports = {
    name: 'guide',
    permissions: ['ADMINISTRATOR'],
    description: "guide",
    async execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(':: __g__uide')
        .setDescription("・read statuses >:( \n・use common sense \n・dont be rude")
        .setColor('#e3d9ca')
        .setFooter('chari | 최소한의')
        message.channel.send(embed)
    }
}