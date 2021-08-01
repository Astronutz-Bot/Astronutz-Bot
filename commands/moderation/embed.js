const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "embed",
aliases: ["", "a"],
category: "<a:TCC__jojo:853575958517907496>  Moderation",
usage: "embed <text to say>",
description: "Returns provided text in Embed form.",
run: async(client, message, args) => {
 if (!args[0]) return message.channel.send("Missing Any Of The Following:\n- Color (Hex)\n- Title (Length: 30)\n- Description (Length: 1500)\n\n**Note: Seperate Each Element In This Format: Color | Title | Description**")
    const all = args.join(" ").split(" | ");
    if (!all[0] || !all[1] || !all[2]) return message.channel.send("Missing Any Of The Following:\n- Color (Hex)\n- Title (Length: 30)\n- Description (Length: 1500)\n\n**Note: Seperate Each Element In This Format: Color | Title | Description**");
    try {
      return message.channel.send({
        embed: {
          color: all[0].toUpperCase(),
          title: all[1].length > 30 ? `${all[1].slice(0, 30)}...` : all[1],
          description: all[2].length > 1500 ? `${all[2].slice(0, 1500)}...` : all[2],
          timestamp: new Date()
        }
      });
    } catch (err) {
      return message.channel.send("Unable To Send Message Or Unable To Create Embed!")
    };

  
}
}