module.exports = {
    name: 'minfo',
    permissions: ['ADMINISTRATOR'],
    description: "massing info",
    async execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(':: __m__assing')
        .setDescription("・ads: 3 \n・tckts: 1 \n・bypass: <@&846468584581759028> + <@&855975793381081118>")
        .setColor('#e3d9ca')
        .setFooter('chari | 최소한의')
        message.channel.send(embed)
    }
}