const { default_prefix } = require("./config.json")
 const DisTube = require("distube")
 const Canvas = require ("canvas");
const { DiscordTogether } = require('discord-together');
const { config } = require("dotenv");
const fetch = require("node-fetch");
const db =require("quick.db");
const moment = require("moment");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const { menu } = require("./shards");
const { test } = require("./test")
const snekfetch = require("snekfetch")
const translate = require('google-translate-api');
const { emotes , emoji} =require("./config.json")
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
const yts = require('yt-search')

client.queue = new Map();
client.vote = new Map();
const { ready } = require("./handlers/ready.js")

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});
client.queue = new Map()
process.on('unhandledRejection', console.error);

  const { addexp } = require("./handlers/xp.js");
client.on("message", async message => {
 

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;

  if (!message.member)
    message.member = message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
  return addexp(message)
});



 //All 
client.on("guildMemberAdd", async (member) => {
  let chx = db.get(`welchannel_${member.guild.id}`);
  
  if(chx === null) {
    return;
  }
  
  
	const Canvas = Canvas.createCanvas(700, 250);
	const context = canvas.getContext('2d');

	const background = await Canvas.loadImage('./wallpaper.jpg');
	context.drawImage(background, 0, 0, canvas.width, canvas.height);

	context.strokeStyle = '#74037b';
	context.strokeRect(0, 0, canvas.width, canvas.height);

	context.font = '28px sans-serif';
	context.fillStyle = '#ffffff';
	context.fillText('Welcome to the server,', canvas.width / 2.5, canvas.height / 3.5);

	context.font = applyText(canvas, `${member.displayName}!`);
	context.fillStyle = '#ffffff';
	context.fillText(`${member.displayName}!`, canvas.width / 2.5, canvas.height / 1.8);

	context.beginPath();
	context.arc(125, 125, 100, 0, Math.PI * 2, true);
	context.closePath();
	context.clip();

	const avatar = await Canvas.loadImage(member.user.displayAvatarURL({ format: 'jpg' }));
	context.drawImage(avatar, 25, 25, 200, 200);

	const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'welcome-image.png');

	client.channels.cache.get(chx).send(`Welcome to the server, ${member}!`, attachment);
});
  




client.on("message", async message => {
if (message.channel.name == "nono") {
if (message.author.bot) return;
message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
if (message.content.includes(`@`)) {
return message.channel.send(`**:x: Please dont mention anyone**`);
 }
  message.channel.startTyping();
if (!message.content) return message.channel.send("Please say something.");
fetch(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(message.content)}&botname=${client.user.username}&ownername=Romeo#0700`)
    .then(res => res.json())
    .then(data => {
        message.channel.send(`${data.message}`);
    });
      message.channel.stopTyping();
}
});

//LEVEL



client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})
 

const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./handlers/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`default_prefix${message.guild.id}`)
  if(prefix === null) prefix =default_prefix;
  
  if(!message.content.startsWith(default_prefix)) return;
 
})


// Set the bot's online/idle/dnd/invisible status
client.on("ready", () => {
    client.user.setStatus("online");
    console.log("Bot is ready")
});

 

require('http').createServer((req, res) => res.end('Bot is Alive')).listen(3000)


client.on
client.on("ready", () => {
client.user.setActivity(`?help | Vibing`, { type: "STREAMING",
      url: "https://www.twitch.tv/nocopyrightsounds"})});







const { Player } = require("discord-music-player");
//const prefixes = require("wokcommands/dist/models/prefixes");
const player = new Player(client, {
    leaveOnEmpty: false,
});

client.player = player;

new Player(client, {
    leaveOnEnd: false,
    leaveOnStop: false,
    leaveOnEmpty: false,
    timeout: 10,
    volume: 150,
    quality: 'high',
});
const fs = require('fs')
const Levels = require("discord-xp");

Levels.setURL("mongodb+srv://Luca:Makro0807@cluster0.0fwfq.mongodb.net/ThatDiscordList?retryWrites=true&w=majority");//can be putten in .env too and then imported

 client.on('guildCreate', guild =>{

    const channelId = '855797371472576523'; //put your channel ID here

    const channel = client.channels.cache.get(channelId); 
     //This Gets The Guild Owner
    if(!channel) return; //If the channel is invalid it returns
    const embed = new discord.MessageEmbed()
        .setTitle('I Joined A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RANDOM')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});


client.on('guildDelete', guild =>{
    const channelId = '855797371472576523';//add your channel ID
    const channel = client.channels.cache.get(channelId); //This Gets That Channel
    
    if(!channel) return;  //If the channel is invalid it returns
    const embed = new discord.MessageEmbed()
        .setTitle('I Left A Guild!')
        .setDescription(`**Guild Name:** ${guild.name} (${guild.id})\n**Members:** ${guild.memberCount}`)
        .setTimestamp()
        .setColor('RED')
        .setFooter(`I'm in ${client.guilds.cache.size} Guilds Now!`);
    channel.send(embed);
});

 
console.log("Join my server")

const smartestchatbot = require('smartestchatbot')
const scb = new smartestchatbot.Client()

client.on("message", async message => {
  if (message.channel.name == "🐙│chatbot") {
    if (message.author.bot) return;
    message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
    if (message.content.includes(`@`)) {
      return message.channel.send(`**:x: Please dont mention anyone**`);
    }
    message.channel.startTyping();
    if (!message.content) return message.channel.send("Please say something.");
    scb.chat({message: message.content, name: client.user.username, owner:"Romeo", user: message.author.id, language:"auto"}).then(reply => {
    message.inlineReply(`${reply}`);
    })
    message.channel.stopTyping();
  }
});


require("./ExtendedMessage");


    allowedMentions: {
        // set repliedUser value to `false` to turn off the mention by default
        repliedUser: true
    }
    
    client.on("message", async message => {
if(message.author.bot) return;
  if(!message.guild) return;
  
return addexp(message, client);
});

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === '?youtube') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
                return message.channel.send(`**Click this link to start** \n ${invite.code}`);
            });
        };
    };
});

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === '?chess') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
                return message.channel.send(`**Click this link to start** \n ${invite.code}`);
            });
        };
    };
});

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === '?betrayal') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
                return message.channel.send(`**Click this link to start** \n ${invite.code}`);
            });
        };
    };
});

client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === '?poker') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'poker').then(async invite => {
                return message.channel.send(`**Click this link to start** \n ${invite.code}`);
            });
        };
    };
});


client.discordTogether = new DiscordTogether(client);

client.on('message', async message => {
    if (message.content === '?fishing') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channelID, 'fishing').then(async invite => {
                return message.channel.send(`**Click this link to start** \n ${invite.code}`);
            });
        };
    };
});
    
client.login(process.env.TOKEN);
