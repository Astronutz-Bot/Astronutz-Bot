const { MessageEmbed } = require("discord.js");

const nekos = require("nekos.life");
const {
  sfw: { baka },
} = new nekos();

module.exports = {
 
    name: "baka",
    description: "Get's a reaction for baka!",
    aliases: ["BAKA", "Baka"],
    usage: "<user>",
    category: "<a:DanceAmongStick:852842898881642496> Fun",
 
  run: async (client, message, args) => {
    const { url } = await baka().catch(() => {});

    if (!url) return message.channel.send(`Could not connect to nekos.life`);

    const embed = new MessageEmbed();
    if (
      message.mentions.members.size &&
      message.mentions.members.first().id === client.user.id
    ) {
      return message.channel.send(`Wrong! You're stupid! Dont ping bot`);
    } else if (
      message.mentions.members.size &&
      message.mentions.members.first().id === message.author.id
    ) {
      return message.channel.send(`Ohh! Yeah thats true you are **BAKA**`);
    } else if (message.mentions.members.size) {
      return message.channel.send(
        embed
          .setColor(`#ff0000`)
          .setImage(url)
.setTitle(`Baka`)
          .setDescription(`${message.mentions.members.first()} is bakaa! LMAO`)
      );
    } else
      return message.channel.send(
        embed.setColor(`#ff0000`).setImage(`${url}?size=1024`)
      );
  },
};