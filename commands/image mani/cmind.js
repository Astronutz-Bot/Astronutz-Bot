const request = require('node-superfetch');
const Color = "RANDOM", Random = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "changemymind",
  aliases: ["cmm"],
  category: "<a:zTW_prplpatron:852828291260743680> Image Manipulation",
  description: "Return A Change My Mind Image!",
  usage: "Changemymind <Text>",
  run: async (client, message, args) => {
    
    const Value = args.join(" ");
    if (!Value || Value.length > 25) return message.channel.send("<a:FBI:855127966094458910> | Please Give  Text And Make Sure Its Not 25+ Characters Long!"); 

    const Data = await Random.ChangeMyMind({ Message: Value, Color: Color });

    return message.channel.send(Data);
  }
};
