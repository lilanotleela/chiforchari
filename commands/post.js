module.exports = {
    name: 'post',
    permissions: ['ADMINISTRATOR'],
    description: "post",
    execute(client, message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setTitle(':: __p__ost')
       .setDescription('・now you can post! \n・you have a __week__ \n・use `.ready` once youre *done*')
       .setColor('#e3d9ca')
       message.channel.send(newEmbed);
    }
}