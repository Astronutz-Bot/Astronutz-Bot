const Discord = module.require("discord.js");
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
module.exports = {
   name: "lock",
   description: "Locks a Channel",
   category: "<a:TCC__jojo:853575958517907496>  Moderation",
   run: async(client, message, args) => {
   if (!message.member.hasPermission("MANAGE_SERVER", "MANAGE_CHANNELS")) {
            return message.channel.send(`:x: | You don't have enough Permisions  `)

        };
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Channel Updates")
   .setDescription(`<a:cc_gtick:839421891331751956> Successfully locked ${message.channel} channel!`)
   .setColor("RANDOM");
   await message.channel.send(embed);
   message.delete();


     let channel = db.fetch(`modlog_${message.guild.id}`)
        if (!channel) return;

        const sembed = new MessageEmbed()
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .setColor("#ff0000")
          
            .setFooter(message.guild.name, message.guild.iconURL())
            .addField("**Moderation**", "lock")
            .addField("**Channel Locked**", message.channel)
            .addField("**Channel Locked By**", message.author.username)
            .addField("**Date**", message.createdAt.toLocaleString())
            .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(sembed)
}
}