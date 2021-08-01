const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const roasts = require('../../JSON/roast.json');

module.exports = {
  name: "kitsune",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  description: "kitsune gif",
  usage: "kitsune",
  run: async (client, message, args) => {
    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

   
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`Kitsune Pictures`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/kitsune/gif/kitsune_${roast}.gif`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};