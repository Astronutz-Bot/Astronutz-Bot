const { MessageEmbed } = require('discord.js')
const md5 = require('md5')

module.exports = {
  
    name: 'love-calculator',
    description: 'Finds Love Precentage Between 2 Users!',
    category: '<a:TCC__loading:853575956446838785> Info',
    usage: 'love-calculator <@user1> <@user2>',
    example: 'love-calculator @Konvex @Hotshot',
    timeout: '3',
    aliases: ['lovecal', 'loverate', 'lovecalc'],
    run: async(client, message, args) => {
        const firstMember = message.mentions.members.filter(m => m.id !== message.author.id).first();
        const secondMember =
            message.mentions.members
                .filter(m => m.id !== firstMember.id)
                .filter(m => m.id !== message.author.id)
                .first() || message.member;
        if (!firstMember || !secondMember)
            return message.reply("Mention a user to calculate");

        const members = [firstMember, secondMember].sort(
            (a, b) => parseInt(a.id, 10) - parseInt(b.id, 10)
        );
        const hash = md5(
            `${members[0].id}${members[1].user.username}${members[0].user.username}${members[1].id}`
        );

        const string = hash
            .split("")
            .filter(e => !isNaN(e))
            .join("");
        const percent = parseInt(string.substr(0, 2), 10);
        const name1 = firstMember.nickname || firstMember.user.username
        const name2 = secondMember.nickname || secondMember.user.username

        const embed = new MessageEmbed()
	.setTitle("Love Calculator")
        
        .setDescription(`**${name1}** <a:zTW_prplplanet:852828288069271572> loves **${name2}**  *${percent}%* percent. `)
        .setColor('RANDOM')
        .setThumbnail(`https://media.discordapp.net/attachments/773569896168292352/855830262370140180/005_preview.gif?width=529&height=397`)
        .setFooter(`Do you agree this percent?`, client.user.displayAvatarURL());

    message.channel.send(embed);
    }
};