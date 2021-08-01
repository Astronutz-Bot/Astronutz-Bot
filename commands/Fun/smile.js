const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const roasts = require('../../JSON/roast.json');

module.exports = {
  name: "smile",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  description: "smile gif",
  usage: "smile",
  run: async (client, message, args) => {
    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

   
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} smiles so hard`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/smile/gif/smile_${roast}.gif`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};