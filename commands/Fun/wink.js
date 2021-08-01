const Discord = require('discord.js');

const superagent = require('superagent');


module.exports = {

        name: 'wink',
        description: 'winks others ;)',
        aliases: ["wink"],
        usage: '<user>',
        category: "<a:DanceAmongStick:852842898881642496> Fun",
    
    run: async (client, message, args) => {
        let { body } = await superagent.get(`https://some-random-api.ml/animu/wink`);
        const embed = new Discord.MessageEmbed()
          .setColor("YELLOW")
          .setTitle(`${message.author.username} had Winked `)
          .setImage(body.link)
          .setTimestamp();
        message.channel.send(embed);
    }
}