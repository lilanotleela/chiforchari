module.exports = {
    name: 'close',
    permissions: ['ADMINISTRATOR'],
    description: "close the ticket",
    execute(client, message, args, Discord){
    let user = message.mentions.members.first();
    let info = args.slice(1).join(" ");
    const closeEmbed = new Discord.MessageEmbed()
    .setTitle(':: __c__lose')
    .setDescription(`・ticket closed \n・posted __${info}__ \n・tysm for massing/linking`)
    .setColor('#e3d9ca')
    .setFooter('chari | 최소한의')
    user.send(closeEmbed)
    }
}
