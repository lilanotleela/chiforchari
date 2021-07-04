module.exports = {
  name: "ticket",
  aliases: [],
  cooldown: 10,
  permissions: [],
  description: "open a ticket!",
  async execute(client, message, args, Discord) {
    const role = message.guild.roles.cache.get("845775515121221692");
    const helper = message.guild.roles.cache.get("846468584581759028");
    const start = new Discord.MessageEmbed()
    .setTitle(':: __t__icket')
    .setDescription('・hello! youve just created a ticket \n・use `.mass` to mass and `.link` to link \n・follow and __read__ the instructions')
    .setColor('#e3d9ca')
    .setFooter('chari | 최소한의')
    const channel = await message.guild.channels.create(`new`);

    channel.setParent("842141239239376977");

    channel.updateOverwrite(role, { SEND_MESSAGES: false, VIEW_CHANNEL: false, });

    channel.updateOverwrite(message.guild.id, { SEND_MESSAGES: false, VIEW_CHANNEL: false, });

    channel.updateOverwrite(message.author, { SEND_MESSAGES: true, VIEW_CHANNEL: true, });

    channel.updateOverwrite(helper, { SEND_MESSAGES: true, VIEW_CHANNEL: true, });
    

  
    const reactionMessage = await channel.send(start);

    try {
      await reactionMessage.react("🥛");
    } catch (err) {
      channel.send("Error sending emojis!");
      throw err;
    }

    const collector = reactionMessage.createReactionCollector(
      (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id).hasPermission("ADMINISTRATOR"),
      { dispose: true }
    );

    collector.on("collect", (reaction, user) => {
      switch (reaction.emoji.name) {
        case "🥛":
          channel.send("oop. ticket is going to go in 5 sec. BY-");
          setTimeout(() => channel.delete(), 5000);
          break;
      }
    });

    message.channel
      .send(`hey bestie. dont get lost, its over here ${channel}`)
      .then((msg) => {
        setTimeout(() => msg.delete(), 7000);
        setTimeout(() => message.delete(), 3000);
      })
      .catch((err) => {
        throw err;
      });
  },
};
