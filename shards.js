const { DiscordMenus, ButtonBuilder, MenuBuilder } = require('discord-menus');
const { Client, MessageEmbed }  = require('discord.js');

const client = new Client();
const MenusManager = new DiscordMenus(client);

const myCoolMenu = new MenuBuilder()
    .addLabel('NPM', { description: 'Get npm package link', value: 'Comming-Soon'})
    .addLabel('Github', { description: 'Get link of github.', value: 'https://github.com/diwasatreya'})
    .addLabel('Server', { description: 'Get link of bot server.', value: 'https://discord.gg/gU7XAxTpX5' })
    .addLabel('Developers', {
        description: 'See owners name', value: 'Romeo#0700,Aiden😏#1558,!BUŁB!#4841', emoji: {
            name: '🎮'
        }
    })
    .setMaxValues(1)
    .setMinValues(1)
    .setCustomID('cool-custom-id')
    .setPlaceHolder('Choose a option');

client.on('message', async (message) => {
    if (message.content === '?links') {
        await MenusManager.sendMenu(message, new MessageEmbed().setDescription(`**${message.author.username}** Which link do you want?`), { menu: myCoolMenu }).then(msg => {
            console.log(msg.id);
            
        })
    }
});

MenusManager.on('MENU_CLICKED', (menu) => {
    menu.reply(`${menu.values}`)
    console.log(menu.values);
   
});

client.login(process.env.TOKEN);
