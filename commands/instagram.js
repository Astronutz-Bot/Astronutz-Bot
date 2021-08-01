const { MessageEmbed } = require("discord.js");
const { stripIndents } = require("common-tags"); //npm i common-tags
const instagram = require("instagram-api.js") //npm i instagram-api.js
module.exports = {
    name: "instagram",
    aliases: ["ig", "insta"],
    description: "Find out some nice instagram statistics",
    usage: "=instagram <name>",
    category: "<a:TCC__loading:853575956446838785> Info",
    run: async (client, message, args) => {
        const name = args.join(" ");

        if (!name) return message.channel.send(" Please provide your instagram name")
      try {
        const account = await instagram.user(name, "7004387805%3A8yJOBJetVvNPOX%3A20") 
        const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(account.username)
            .setAuthor(account.username, account.is_verified ? "https://cdn.discordapp.com/emojis/834013620270661662.gif?v=1" : null )
            .setURL(`https://instagram.com/${name}`)
            .setThumbnail(account.profile_pic_url_hd)
            .addField("Profile information", stripIndents`
            \`•\` Username: **${account.username}**
            \`•\` Full name: **${account.full_name ? account.full_name : "Unknown"}**
            \`•\` Bio: **${account.biography ? account.biography : "No Bio"}**
            \`•\` Posts: **${account.edge_owner_to_timeline_media.count}**
            \`•\` Followers: **${account.edge_followed_by.count}**
            \`•\` Following: **${account.edge_follow.count}**
            \`•\` Private: **${account.is_private ? "Yes" : "No"}**`)
        .setFooter(account.username)
        message.channel.send(embed);
      } catch (e) {
        message.channel.send(`Sorry i can't find this user`)
      }
    }
}