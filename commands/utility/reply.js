const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "sreply",
  category: "<a:TCC_hype:852863775924027392>  Utility",
  run: async (client, message, args) => {
    
let channel = await db.fetch(`suggestion_${message.guild.id}`);
if (channel === null) return;
     
      if(!message.member.hasPermission('MANAGE_GUILD')) return;
      
    const rgx = /^(?:<@!?)?(\d+)>?$/;

    const messageID = args[0];
    const replyQuery = args.slice(1).join(' ');
      
    const number = new MessageEmbed()
      .setDescription(`<a:TCC_IconNote:852844471803707392>    | I don't think that was a Message ID!`)
      .setColor("FF2052")
      
    const id = new MessageEmbed()
      .setDescription(`<a:TCC_IconNote:852844471803707392>  |You forgot to specify Message ID!`)
      .setColor("FF2052")
      
    const query = new MessageEmbed()
      .setDescription(`<a:TCC_IconNote:852844471803707392>   | You forgot to specify the Reply!`)
      .setColor("FF2052")
      
    const reply = new MessageEmbed()
      .setDescription(`<a:cc_gtick:839421891331751956>  | Successfully Replied the Suggestion.`)
      .setColor("00FFFF")
      
    const noChannel = new MessageEmbed()
      .setDescription(`<a:TCC_IconNote:852844471803707392>   | No Suggestion Channel found!`)
      .setColor("FF2052")
      
    const noMessage = new MessageEmbed()
      .setDescription(`<a:TCC_IconNote:852844471803707392>   | Didn't find any Message with that ID!`)
      .setColor("FF2052")
    
      if(!messageID) return message.channel.send(id);
      
      if (!rgx.test(messageID)) return message.channel.send(number);
      
      if(!replyQuery) return message.channel.send(query)
      
      try{
      const suggestionChannel = message.guild.channels.cache.get(channel)
      
      if(!suggestionChannel) return message.channel.send(noChannel)
      
      const suggestedEmbed = await suggestionChannel.messages.fetch(messageID).catch(error => {
    const noMessage = new MessageEmbed()
      .setDescription(`<a:TCC_IconNote:852844471803707392>   | Didn't find any Message with that ID!`)
      .setColor("FF2052")
  return message.channel.send(noMessage);
  })
     
      const data = suggestedEmbed.embeds[0];
     
      const replyEmbed = new MessageEmbed()
      .setAuthor(`${data.author.name}`, data.author.iconURL)
      .setDescription(data.description)
      .setColor("BLUE")
      .addField(`Reply from ${message.author.tag}`, replyQuery)
      .setFooter("Status: Replied")
      .setTimestamp();
      
     suggestedEmbed.edit(replyEmbed)
     
     message.channel.send(reply)
      
      const user = await client.users.cache.find((u) => u.tag === data.author.name)
      
    const embed = new MessageEmbed()
      .setDescription(`You have got a Reply over your Suggestion <a:cc_gtick:839421891331751956> . **[Message Link](https://discord.com/channels/${message.guild.id}/${channel}/${messageID})**`)
      .setColor("BLUE")
      user.send(embed)
        
      } catch(err) {
        return;
    }
  }
}