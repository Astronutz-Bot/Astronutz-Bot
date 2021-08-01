const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "clyde",
  aliases: ["clydee", "clydebot"],
  category: "<a:zTW_prplpatron:852828291260743680> Image Manipulation",
  description: "Return clyde message",
  usage: "clyde <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");

    if (!Value || Value.length > 150) return message.channel.send("<a:FBI:855127966094458910> | Please Give Text And Make Sure Its Not 150+ Characters Long!"); 

    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle("Clyde (" + message.author.username + ")")
    .setImage(encodeURI(`https://ctk-api.herokuapp.com/clyde/${Value}%20`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};
