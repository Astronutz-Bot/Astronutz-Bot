const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const roasts = require('../../JSON/roast.json');

module.exports = {
  name: "slap",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  description: "slap gif",
  usage: "slap <user> ",
  run: async (client, message, args) => {
    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];
 const user = message.mentions.members.first();
   if (!user) {
      return message.channel.send(
        "<a:zTW_prplplanet:852828288069271572> |  You should mention some one you want to slap!");
   }
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} slaped ${Member.user.username}`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/slap/gif/slap_${roast}.gif`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};