const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "simp",
  aliases: ["sim", "toxic"],
  category: "<a:zTW_prplpatron:852828291260743680> Image Manipulation",
  description: "Shows simp img with user avatar",
  usage: "simp <user>",
  run: async (client, message, args) => {
    
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Simp")
    .setImage(encodeURI
    (`https://api.devs-hub.xyz/simp?image=${Member.user.displayAvatarURL({ format: "png" })}`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
