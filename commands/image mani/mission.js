const Discord = require('discord.js');
const { AME_API } = require('../../config');
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient(AME_API);

module.exports = {
    
        name: "mission",
        noalias: [''],
        category: "<a:zTW_prplpatron:852828291260743680> Image Manipulation",
        description: "Shows Mission Passed Respect+ Image",
        usage: "[username | nickname | mention | ID] (optional)",
        
    run: async (bot, message, args) => {

        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("<a:TCC_DogDance:852844475889483806> | **It takes little time wait**");
        let buffer = await AmeAPI.generate("missionpassed", { url: user.user.displayAvatarURL({ format: "png", size: 2048 }) });
        let attachment = new Discord.MessageAttachment(buffer, "mission.png");
        m.delete({ timeout: 100 });
        message.channel.send(attachment);
    }
};