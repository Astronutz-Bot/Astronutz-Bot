const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "ytcmt",
  aliases: ["youtubecomment", "comment"],
  category: "<a:zTW_prplpatron:852828291260743680> Image Manipulation",
  description: "Return message in Youtube comment",
  usage: "ytcmt <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");

const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if (!Value || Value.length > 150) return message.channel.send("<a:FBI:855127966094458910> | Please Give Text And Make Sure Its Not 150+ Characters Long!"); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Youtube Comment (" + message.author.username + ")")
    .setImage(encodeURI(`https://some-random-api.ml/canvas/youtube-comment?avatar=${Member.user.displayAvatarURL({ format: "png" })}&username=${message.author.username}&comment=${Value}`))
    .setTimestamp();
    return message.channel.send(Embed);
  }
};
