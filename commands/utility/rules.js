const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "rules",
aliases: [""],
category: "<a:TCC_hype:852863775924027392>  Utility",
usage: "<prefix>rules",
description: "Returns serve rules that will perfect",
run: async(client, message, args) => {
  
 await message.delete()
  
  let embed = new MessageEmbed()
.setTitle(`${message.guild.name}'s Rules`)
  .setDescription(`
**GENERAL RULES**
➜ Follow all of the discord TOS https://dis.gd/guidelines
➜ Staff have final say with punishments
➜ Be respectful to everyone
➜ Keep toxicity to a minimum; encouraging suicide, harassment, etc
➜ No hate speech; racism, homophobia, sexism, etc
➜ Do not send false reports through the report command
➜ Keep arguments and personal problems in DMs
➜ No threats; DDoS, death threats, doxxing, etc
➜ No advertising on the server directly or through DMs (ban)
➜ No excessive pinging; mass pinging, spam pinging
➜ Do not repeatedly leave and rejoin the server
➜ Do not try to get other people punished/banned (baiting)
➜ Do not send unsolicited gore/nsfw/pornographic content through people’s dms (ban)
➜ Do not post people's pictures/dms/information/recordings without their permission

**VOICE CHAT RULES**
➜ No ear rape/mic spam this includes videos of any sorts
➜ Do not spam the bot with music
➜ Keep the usage of voice changers/sound boards to a minimum
➜ Do not stream any Gore or NSFW content
➜ Don’t show your genitals on cam (ban)
➜ Only one music bot per channel
➜ If you choose to record audio/visuals in our voice chats, both private and public, you must ask for permission from everyone in the call. The only exception is recording evidence regarding reports

**TEXT CHAT RULES**
➜ Do not spam/text wall; 4 lines or more counts as spam. Do not send the same pictures over & over
➜ No irrelevant emotes/dotting
➜ No Pornographic/Gore/NSFW/Borderline NSFW content (including nsfw/sexual talk)
➜ Do not misuse the media channels
➜ No suspicious links
➜ No botting invite links in other discords for our discord. (Allow others to find us on their own)
➜ Please keep chat to English, we cannot moderate what we can't understand

**PROFILE RULES**
➜ No Inappropriate names or profile pictures.
➜ No alternate accounts (ban)
➜ No impersonation
➜ Do not include hate speech within your status
➜ Do not bring notice to advertisements in your status
 `)
  .setColor("RANDOM")
  .setThumbnail(message.guild.iconURL({ dynamic: true }))
.setFooter(`Report our server staff for problem`)
.setTimestamp()
  message.channel.send(embed)
}
}