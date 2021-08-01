const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const roasts = require('../../JSON/roast.json');

module.exports = {
  name: "holo",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  description: "holo gif",
  usage: "holo",
  run: async (client, message, args) => {
    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

   
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Is ${message.author.username} holo?`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/holo/gif/holo_${roast}.gif`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};