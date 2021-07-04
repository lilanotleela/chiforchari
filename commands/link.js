module.exports = {
    name: 'link',
    cooldown: 10,
    permissions: [],
    description: "link with lila",
    execute(client, message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setTitle(':: __l__ink')
       .setDescription('・send your ad in __cb__ \n・send an ss of <#845728589163921480> ad in a channel \n・ ping <@503199737843941408>')
       .setColor('#e3d9ca')
       .setFooter('chari | 최소한의')
       message.channel.send(newEmbed);
       message.react('860905006760722492')
    }
}