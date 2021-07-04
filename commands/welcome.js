module.exports = {
    name: 'welcome',
    permissions: ['ADMINISTRATOR'],
    description: "welcome embed",
    async execute(client, message, args, Discord){
        let embed = new Discord.MessageEmbed()
        .setTitle(':: __w__elcome')
        .setDescription("・chari is a __pm__ prtl \n・owned by <@503199737843941408> \n・i hope you enjoy your experience!")
        .setImage("https://i.pinimg.com/originals/ff/f8/e5/fff8e5739d6deae8b834a920f35c7d4b.jpg")
        .setColor('#e3d9ca')
        .setFooter('chari | 최소한의')
        message.channel.send(embed)
    }
}