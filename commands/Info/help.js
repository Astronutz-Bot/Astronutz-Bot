const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category: "<a:TCC__loading:853575956446838785> Info",
  run: async (client, message, args) => {
     message.delete({ timeout: 8000 })
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Description is not provided join support server for help")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied Join Support server for help")
        .addField("Aliases", "```" + command.aliases + "```"|| "There is no aliases")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("#000000")
        .setFooter(`Join our support server `);

      return message.channel.send(embed).then(m => m.delete({ timeout: 8000 }));
    } else {
      const commands = await client.commands;

      let emx = new MessageEmbed()
        .setDescription(`**<a:TCC_AlphabetH:852858004848115713> <a:TCC_AlphabetE:852858003216007198> <a:TCC_AlphabetY:852858006051094568> ${message.author.username}** I am Astronutz . Do \`?help2\` to see simple another help command.`)
       
        .setColor("#b7ff00")
        .setImage("")
        .setFooter(`Aesthetic Theme Bot | ?vote us `)
        .setThumbnail(`https://images-ext-2.discordapp.net/external/UAF6u1PMBCEezgu6oIKojJgM9rMLxf6cwEiei-S1Qqo/%3Fsize%3D1024/https/cdn.discordapp.com/icons/708565122188312579/a_6e9bdde07c2ef22f0320c6b224ddb804.gif?width=433&height=433`);

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("` • `") + "`";

        emx.addField(`${category}`, desc);
      }

     var msg = await message.channel.send(emx).then(m => m.delete({ timeout: 30000 }));
          
          

    }
  }
};
