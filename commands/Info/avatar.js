const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.json");

module.exports = {
  name: "avatar",
  aliases: ["icon", "pfp"],
  category: "<a:TCC__loading:853575956446838785> Info",
  description: "Show Member Avatar!",
  usage: "Avatar | <Mention Member>",
  accessableby: "everyone",
  run: async (client, message, args) => {
    //Start

    let Member = message.mentions.users.first() || message.guild.member(args[0]) || message.author;

    let embed = new Discord.MessageEmbed()
      .setColor(Color)
      .addField(
        "Links",
        `[Png](${Member.displayAvatarURL({
          format: "png",
          dynamic: true
        })}?size=1024) | [Jpg](${Member.displayAvatarURL({
          format: "jpg",
          dynamic: true
        })}?size=1024) | [Webp](${Member.displayAvatarURL({
          format: "webp",
          dynamic: true
        })}?size=1024)`
      )
      .setImage(`${Member.displayAvatarURL({ dynamic: true })}?size=1024`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};