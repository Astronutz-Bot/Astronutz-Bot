const discord = require("discord.js");
const roasts = require('../../JSON/emoji.json');
module.exports = {
  name: "play", 
  aliases: ["stream", "p"], 
  category: "<a:_NC_singerist2:853575942679822436> Music",
  run: async (client, message, args) => {
     let emoji = roasts.emoji[Math.floor((Math.random() * roasts.emoji.length))];
    if (!args[0])
      return message.channel.send(
        ""
      );
    let text = args.join(" ");
    
    if (text.length > 1)
      return message.channel.send(
        `${emoji} **Searching:** *\`${text}\`* `
      );
}
}