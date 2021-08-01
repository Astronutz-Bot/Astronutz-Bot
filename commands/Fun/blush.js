const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const roasts = require('../../JSON/roast.json');

module.exports = {
  name: "blush",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  description: "blush gif",
  usage: "blush ",
  run: async (client, message, args) => {
    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

   
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} is blush`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/blush/gif/blush_${roast}.gif`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};