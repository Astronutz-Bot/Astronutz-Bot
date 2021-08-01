
const Color = "RANDOM";
const Discord = require("discord.js");

module.exports = {
  name: "faq",
  aliases: ["faqs"],
  category: "<a:TCC__loading:853575956446838785> Info",
  description: "See the bot faq",
  usage: "<prefix>faq",
  run: async (client, message, args) => {
    
   

    const Embed = new Discord.MessageEmbed()
    .setColor(`#ff00b4`)
    .setTitle("Frequently Asked Question!")
    .setDescription(`
    <:reddot:852864698562773041> **How can I change the bot prefix?**
    <a:TCC__pnkarrow:852873107568197673> You can't change the prefix. For now the prefix of bot is \`?\`. We may add changing prefix features in this bot in near future. <:TCC__star1:854907136215220244>
    <:reddot:852864698562773041> **Things while doing \`help <command>\`**
    <a:TCC__pnkarrow:852873107568197673> Somethings while doing help commmands bot will show Usage and Aliases: \`undefined\` or \`\` It means that it does not have any aliases and usage. <:TCC__star1:854907136215220244>
    <:reddot:852864698562773041> **Why help command message auto deleted after while?**
    <a:TCC__pnkarrow:852873107568197673> Yeah the help command of this bot is long and also we want bot that avoid spam and have clear message so we make bot that delete help command in 30 second and help <command> in 8 second. <:TCC__star1:854907136215220244> 
    <:reddot:852864698562773041> **Some Glitch in music system**
    <a:TCC__pnkarrow:852873107568197673> Yes if you play music just 8 second of bot leaving then song will not be played and to fix it you have to disconnect the bot from voice channel and ahain play music. It can alos cant find some songs lyrics we will fix that as soon as possible. <:TCC__star1:854907136215220244>
    <:reddot:852864698562773041> **Fun commands like fluff, hug, etc donot work**
    <a:TCC__pnkarrow:852873107568197673> It works but sometime image cant load or API used in that stops works but it works 99.99% so try againg using that commands <:TCC__str1:854907136215220244>
    <:reddot:852864698562773041> **While playing song or akinator it gives late reply**
    <a:TCC__pnkarrow:852873107568197673> Yes, It gives late reply cuz it takes time to load title and song url with reaction. Also It always scan music given by user so there is chance of late reply. About aki the package used in akinator is slow and it takes time to react. <:TCC__str1:854907136215220244>
    `)
    .setThumbnail(client.user.displayAvatarURL())
     .setFooter(`If you find more bug than report us ?bug <report/bugs>`)
     .setTimestamp()
    
   

    return message.channel.send(Embed);
  }
};
