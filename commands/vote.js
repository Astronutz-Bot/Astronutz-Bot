
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "vote",
  aliases: ["upvote"],
  category: "<a:TCC__loading:853575956446838785> Info",
  description: "Vote link",
  usage: "Vote",
  run: async (client, message, args) => {
    
   

    const Embed = new Discord.MessageEmbed()
    .setColor(`#ff00b4`)
    .setTitle("Vote Bot!")
    .setDescription(`
    Hello! <a:zTW_prplneon:852828296995667968> ${message.author.username} Here is vote link. \n \n  __***Top.gg***__:\n    [Click Here](https://top.gg/bot/855055398298058773) \n \n __***Discordbotlist***__: \n ⁣[Click Here](https://discordbotlist.com/bots/astronutz/upvote)`)
    .setThumbnail(client.user.displayAvatarURL())
     .setFooter(`You can vote us in every 12 hours`)
     .setTimestamp()
    
   

    return message.channel.send(Embed);
  }
};
