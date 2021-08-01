const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const roasts = require('../../JSON/roast.json');
module.exports = {
  name: "neko",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  description: "neko gif",
  usage: "neko",
  run: async (client, message, args) => {
    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];
    
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Is ${message.author.username} neko?`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/neko/gif/neko_${roast}.gif`))
    .setTimestamp();
    return message.channel.send(Embed);
  }
};