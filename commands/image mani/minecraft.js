const request = require('node-superfetch');
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "achievement",
  description: "Gives you an achievment",
  category: "<a:zTW_prplpatron:852828291260743680> Image Manipulation",
  run: async (client, message, args) => {
    const text = args.join("+");
    const e = new MessageEmbed()
      .setTitle("MineCraft achievement!")
      .setImage(
        `https://minecraftskinstealer.com/achievement/12/Achievement%20Get!/${text}`
      );
    message.channel.send(e);
  },
};