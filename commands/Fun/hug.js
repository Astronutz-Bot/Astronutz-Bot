const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const roasts = require('../../JSON/roast.json');

module.exports = {
  name: "hug",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  description: "hug a user",
  usage: "hug <user>",
  run: async (client, message, args) => {
    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];
    if(!args[0]) return message.reply(`<a:zTW_prplplanet:852828288069271572> |  You should mention some one you want to hug! `)
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} hugs ${Member.user.username}`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/hug/gif/hug_${roast}.gif`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
