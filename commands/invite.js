const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "invite",
aliases: ["inv"],
category: "<a:TCC__loading:853575956446838785> Info",
usage: "?invite",
description: "Invite the bot to your server..",
run: async(client, message, args) => {
  
 await message.delete()
  
  let embed = new MessageEmbed()
.setTitle(` ${client.user.username} Bot`)
  .setDescription(`
  __WOW!__ Greate I was made by <@519666024220721152> You can add me by scaning QRCODE or link below and also join my support server by links below \n **Invite:** [Click Here](https://discord.com/oauth2/authorize?client_id=855055398298058773&permissions=8&scope=applications.commands%20bot)\n **Support Server:** [Click Here](https://discord.gg/gU7XAxTpX5) \n **Web-Dashboard:** [Click Here](https://astronuts.gamingdiwas.repl.co/) `)
  .setColor("RANDOM")
  .setThumbnail(`https://media.discordapp.net/attachments/839039930176897055/856219256764891176/qrcode.png`)
.setFooter(` ${message.guild} `)
.setTimestamp()
  message.channel.send(embed)
}
}