const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = {
    name: "help2",
    description: "The help command, what do you expect?",
category: "<a:TCC__loading:853575956446838785> Info",
    async run (client, message, args){

        //Sort your commands into categories, and make seperate embeds for each category
        const home = new Discord.MessageEmbed()
        .setTitle(`Astronutz Bot`)
        .setDescription(`**<a:TCC_AlphabetH:852858004848115713> <a:TCC_AlphabetE:852858003216007198> <a:TCC_AlphabetY:852858006051094568> ${message.author.username}**. Do \`?dev\` to see all develoepr commands available.
        
        <a:pink_arrow:852477892692541451> \`Page 2\` : **<a:DanceAmongStick:852842898881642496> Fun**
        
        <a:pink_arrow:852477892692541451> \`Page 3\` : **<a:TCC__loading:853575956446838785> Info**
        
        <a:pink_arrow:852477892692541451> \`Page 4\` : **<a:zTW_prplpatron:852828291260743680> Image Manipulation**
        
        <a:pink_arrow:852477892692541451> \`Page 5\` : **<a:TCC__jojo:853575958517907496>  Moderation**

        <a:pink_arrow:852477892692541451> \`Page 6\` : **<a:_NC_singerist2:853575942679822436> Music**
        
        <a:pink_arrow:852477892692541451> \`Page 7\` : **<a:TCC_hype:852863775924027392>  Utility**
        
        **[\[Invite\]](https://discord.com/oauth2/authorize?client_id=855055398298058773&permissions=8&scope=applications.commands%20bot) [\[Support\]](https://discord.gg/gU7XAxTpX5)**`)
        .setColor(`#55e612`)
        .setThumbnail(`https://images-ext-2.discordapp.net/external/UAF6u1PMBCEezgu6oIKojJgM9rMLxf6cwEiei-S1Qqo/%3Fsize%3D1024/https/cdn.discordapp.com/icons/708565122188312579/a_6e9bdde07c2ef22f0320c6b224ddb804.gif?width=434&height=434`)

        .setTimestamp()


        const fun = new Discord.MessageEmbed()
        .setTitle('<a:DanceAmongStick:852842898881642496> Fun')
        .setDescription(`Here are some fun commands included anime games also: \n \`8ball\` • \`aki\` • \`baka\` • \`bite\` • \`blush\` • \`cuddle\` • \`feed\` • \`fluff\` • \`holo\` • \`horserace\` • \`hug\` • \`kiss\` • \`kitsune\` • \`lick\` • \`meme\` • \`neko\` • \`pat\` • \`poke\` • \`slap\` • \`smile\` • \`tickle\` • \`trivia\` • \`wink\` `)
        .setColor(`#1227e6`)
        .setTimestamp()

        const info = new Discord.MessageEmbed()
        .setTitle('<a:TCC__loading:853575956446838785> Info')
        .setDescription(`Here are some information command that can help you: \n \`anime\` • \`applestore\` • \`avatar\` • \`channelinfo\` • \`country\` • \`covid\` • \`djs\` • \`faq\` • \`gif\` • \`github\` • \`help\` • \`help2\` • \`instagram\` • \`invite\` • \`invites\` • \`love-calculator\` • \`message\` • \`movie\` • \`npm\` • \`playstore\` • \`pokemon\` • \`qrcode\` • \`roleinfo\` • \`urbandictionary\` • \`vote\` • \`weather\` • \`whois\` • \`wikipedia\` `)
        .setColor(`#b6e612`)
        .setTimestamp()

        const im = new Discord.MessageEmbed()
        .setTitle('<a:zTW_prplpatron:852828291260743680> Image Manipulation')
        .setDescription(`Here are some image manipulation commands that can manipulate your image: \n \`affect\` • \`avatarfusion\` • \`bed\` • \`captcha\` • \`catsay\` • \`clyde\` • \`changemymind\` • \`smartcat\` • \`cowsay\` • \`dislike\` • \`gay\` • \`grab\` • \`gun\` • \`hearts\` • \`hitler\` • \`jail\` • \`like\` • \`magik\` • \`meeting\` • \`achievement\` • \`mission\` • \`rip\` • \`simp\` • \`spank\` • \`toilet\` • \`trash\` • \`triggered\` • \`wasted\` • \`whatsapp\` • \`ytcmt\` `)
        .setColor(`#9312e6`)
        .setTimestamp()
        

        const mod = new Discord.MessageEmbed()
        .setTitle('<a:TCC__jojo:853575958517907496>  Moderation')
        .setDescription(`Here are some moderation command that can moderate your server: \n \`ban\` • \`purge\` • \`embed\` • \`firstmessage\` • \`hackban\` • \`kick\` • \`lock\` • \`mute\` • \`removerole\` • \`resetwarns\` • \`setnick\` • \`setmodlog\` • \`slowmode\` • \`steal\` • \`timedlockdown\` • \`unban\` • \`unmute\` • \`voicekick\` • \`warn\` • \`warning\` `)
        .setColor(`#e61812`)



        const music = new Discord.MessageEmbed()
        .setTitle('<a:_NC_singerist2:853575942679822436> Music')
        .setDescription(`Here are some music commands that rocks your server: \n \`loop\` • \`lyrics\` • \`move\` • \`nowplaying\` • \`pause\` • \`play\` • \`playlist\` • \`queue\` • \`remove\` • \`resume\` • \`search\` • \`shuffle\` • \`skip\` • \`stop\` • \`tts\` • \`volume\` \`join\` • \`leave\` `)
        .setColor(`#e61297`)
     


        const utility = new Discord.MessageEmbed()
        .setTitle('<a:TCC_hype:852863775924027392>  Utility')
        .setDescription(`Here are some utility commands: \n \`bug\` • \`create\` • \`createrole\` • \`delchannel\` • \`deleterole\` • \`sreply\` • \`rules\` • \`setsuggest\` • \`snipe\` • \`suggest\` • \`color\` • \`createcolor\` • \`autocreatecolors\` • \`setautorole\` `)
        .setColor(`#12ace6`)

        const pages = [
                home,
                fun,
                info,
                im,
                mod,
                music,
                utility
                
        ]

        const emojiList = ["⏪", "⏩"];

        const timeout = '120000';

        pagination(message, pages, emojiList, timeout)
    }
}