const { MessageEmbed } = require("discord.js");
module.exports = {
    name: "message",
    category: "<a:TCC__loading:853575956446838785> Info",
    description: "",

    async run (client, message, args){
  let reg = /https:\/\/(canary|ptb)\.?(discord\.com)\/channels\/(\d+)\/(\d+)\/(\d+)/i;
        if (!reg.test(args[0]))
            return message.channel.send("This is not a valid discord link. \n\n **Do like this** \`?message https://canary.discord.com/channels/708565122188312579/855062505201467402/855468148882800640\` **add** \`canary.\` **in message link**");
        let [full, discord, com, guildID, channelID, msgID] = args[0].match(reg);
        let foundGuild = client.guilds.cache.get(guildID);
        if (!foundGuild)
            return message.channel.send(`No guild found with this ID (${guildID})`);
        let foundChannel = foundGuild.channels.cache.get(channelID);
        if (!foundChannel)
            return message.channel.send(`No channel found with this ID (${channelID})`);
        let foundMessage = await foundChannel.messages.fetch(msgID);
        if (!foundMessage)
            return message.channel.send(`No message found with this ID (${msgID})`);
        let embed = new MessageEmbed()
            .setTitle('Message Found')
            .setAuthor(foundMessage.author.tag, foundMessage.author.displayAvatarURL())
            .setDescription(foundMessage.content)
            .setColor("BLUE");
        if (foundMessage.embeds.length) {
            embed = foundMessage.embeds[0]
                .setTitle("Message Found")
                .setDescription(`**Content:** ${embed.description}` + `${foundMessage.embeds[0].description ? `\n\n${foundMessage.embeds[0].description}` : ""}`)
                .setAuthor(foundMessage.author.tag, foundMessage.author.displayAvatarURL())
                .setColor("BLUE")
                .addField("\u200b", "\u200b");
        }
        if (foundMessage.attachments.size) {
            embed.setImage(foundMessage.attachments.first()?.proxyURL);
        }
        embed
            .addField('URL', `[Jump To Message](${full})`, true)
            .addField("Embeds", foundMessage.embeds.length, true)
            .addField("Channel", `<#${channelID}>`, true);
        return message.channel.send(embed);
    
    
    
    
    
    
    
    
    }
}
