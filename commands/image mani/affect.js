const DIG = require("discord-image-generation");
const Discord = require("discord.js");

module.exports = {
  
        name: 'affect',
        description: 'this won\'t affect my baby!',
        aliases: ["affect"],
        usage: '',
        category: "<a:zTW_prplpatron:852828291260743680> Image Manipulation",
 
    run: async (client, message, args) => {
 //   const m = client.findMember(message, args, true);
   
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
 let m = await message.channel.send("<a:TCC_DogDance:852844475889483806> | **It takes little time wait**");   
 let avatar = user.user.displayAvatarURL({
      dynamic: false,
      format: "png",
    });

    let img = await new DIG.Affect().getImage(avatar);

    let attach = new Discord.MessageAttachment(img, "thomas.png");
    m.delete({ timeout: 100 });
    message.channel.send(attach);
  },
};