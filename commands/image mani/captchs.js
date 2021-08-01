const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    
        name: "captcha",
       
        category: "<a:zTW_prplpatron:852828291260743680> Image Manipulation",
        description: "Shows Captcha Image Of An User",
        usage: "[username | nickname | mention | ID](optional)",
       
    run: async (bot, message, args) => {

        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("<a:TCC_DogDance:852844475889483806> | **It takes little time wait**");
        try {
            let res = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&username=${user.user.username}&url=${user.user.displayAvatarURL({ format: "png", size: 512 })}`));
            let json = await res.json();
            let attachment = new Discord.MessageAttachment(json.message, "captcha.png");
            message.channel.send(attachment);
            m.delete({ timeout: 100 });
        } catch (e) {
            console.log(e);
            m.edit("Error, Try Again! Mention Someone");
        }
    }
};