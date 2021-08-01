const Discord = module.require("discord.js")
const giphy = require('giphy-api')("W8g6R14C0hpH6ZMon9HV9FTqKs4o4rCk");

module.exports = {
 
    name: "gif",
    description: "Get gifs based on your search",
     aliases: ["giphy"],
  category: "<a:TCC__loading:853575956446838785> Info",
    run: async (client, message, args) => {
    if (args.length === 0) {
        message.channel.send('<:reddot:852864698562773041> No Search terms! <:reddot:852864698562773041>')
        return;
    }
    if (args.length === 1) {
        term = args.toString()
    } else {
        term = args.join(" ");
    }
    giphy.search(term).then(function (res) {
        // Res contains gif data!
        let id = res.data[0].id
        let msgurl = `https://media.giphy.com/media/${id}/giphy.gif`
        
        const embed = new Discord.MessageEmbed()
        .setTitle(`Here is \`${term}\` GIF`)
        .setImage(msgurl)
        .setFooter(`Powered by GIPHY`, `https://raw.githubusercontent.com/Giphy/GiphyAPI/f68a8f1663f29dd9e8e4ea728421eb2977e42d83/api_giphy_logo_sparkle_clear.gif`)
        .setColor("RANDOM");
        message.channel.send(embed);

    });

    message.delete();
}
}