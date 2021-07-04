module.exports = {
    name: 'done',
    permissions: ['ADMINISTRATOR'],
    description: "lila is done",
    execute(client, message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setTitle(':: __d__one')
       .setDescription('・lila is done posting \n・feel free to leave a review \n・please take care of yourself')
       .setColor('#e3d9ca')
       .setFooter('chari | 최소한의')
       message.channel.send(newEmbed);
    }
}