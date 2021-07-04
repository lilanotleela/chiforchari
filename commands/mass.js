module.exports = {
    name: 'mass',
    cooldown: 10,
    permissions: [],
    description: "massing intructions",
    execute(client, message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setTitle(':: __m__assing')
       .setDescription('・send your ads in __cb__ \n・state *all* or *categories* \n・ping <@503199737843941408> or an __online__ helper and *wait* ')
       .setColor('#e3d9ca')
       .setFooter('chari | 최소한의')
       message.channel.send(newEmbed);
       message.react('860904929111834645')
    }
}