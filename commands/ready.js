const { MessageButton } = require("discord-buttons")

module.exports = {
    name: 'ready',
    cooldown: 10,
    permissions: [],
    description: "omg thanks. now lila can post",
    execute(client, message, args, Discord){
       const newEmbed = new Discord.MessageEmbed()
       .setTitle(':: __l__ila will post')
       .setDescription('・thanks for posting \n・react with sep or batch \n・lila will take a week max')
       .setColor('#e3d9ca')
       .setFooter('chari | 최소한의')
       const batch = new Discord.MessageEmbed()
       .setTitle(':: __b__atch')
       .setDescription('・lila will post batches! \n・lila will ping you once shes done')
       .setColor('#e3d9ca')
       .setFooter('chari | 최소한의')
       const sep = new Discord.MessageEmbed()
       .setTitle(':: __s__ep')
       .setDescription('・please tell how __long__ \n・lila will post sep \n・lila will ping you once shes done')
       .setColor('#e3d9ca')
       .setFooter('chari | 최소한의')

       let b = new MessageButton()
       .setStyle('grey')
       .setLabel('batch')
       .setID('batch');

       let s = new MessageButton()
       .setStyle('grey')
       .setLabel('sep')
       .setID('sep');

       message.channel.send("", {
           buttons: [b, s],
           embed: newEmbed
       })
       message.channel.send("<@503199737843941408>")
       message.member.roles.add('845812308437631056')

   client.on('clickButton', async (button) => {
    if (button.id === 'batch') {
    message.channel.send(batch)
    button.defer()
    }
});
client.on('clickButton', async (button) => {
    if (button.id === 'sep') {
    message.channel.send(sep)
    button.defer()
    }
});
       }
    }