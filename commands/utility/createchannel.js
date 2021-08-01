const Discord = require("discord.js");
module.exports = {
  name: "create",
  usage: `create <channel/Category/voice> <name>`,
  category: "<a:TCC_hype:852863775924027392>  Utility",
  description: "create all channels ",
  args: true,
  cooldown: 8,
  permissions: "MANAGE_ROLES" || "ADMINISTRATOR",
  bot: ["MANAGE_CHANNELS", "VIEW_CHANNEL", "MANAGE_ROLES"],
  run: async (client, message, args) => {
     if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send(
        "You should have admin perms to use this command!"
      );
    }
    const [key, ...value] = args;
    switch (key) {
      default:
        return message.channel.send(
          new Discord.MessageEmbed()
            .setColor("RED")
            .setTimestamp()
            .setFooter(
              message.author.tag,
              message.author.displayAvatarURL({ dynamic: true }) ||
                client.user.displayAvatarURL({ dynamic: true })
            )
            .setDescription("Invalid: Do like this \`create <channel/Category/voice> <name>\` ")
        );
      case "channel":
        {
          const name = args[1];
          if (!name) {
            return send("please provide the channel name", message);
          }
          const tpi = args.slice(2).join(" ");
          if (!tpi) {
            return send(
              "Please provide the reason for creating the channel",
              message
            );
          }
          message.guild.channels
            .create(name, {
              type: "text",
              topic: tpi,
              permissionOverwrites: [
                {
                  id: client.user.id,
                  allow: 2081422591
                }
              ]
            })
            .then(async channel => {
              const ss = await send(
                `Successfully Create <#${channel.id}> Channel`,
                message
              );
              await ss.react("❌");
              let collector = ss.createReactionCollector(
                (reaction, user) => user.id === message.author.id
              );
              collector.on("collect", async (reaction, user) => {
                if (reaction._emoji.name === "❌") {
                  channel.delete();
                }
              });
            });
        }

        break;
      case "category":
        {
          if (!args.slice(1).join(" ")) {
            return send("please provide the channel name", message);
          }

          message.guild.channels
            .create(args.slice(1).join(" "), {
              type: "category",
              permissionOverwrites: [
                {
                  id: client.user.id,
                  allow: 2081422591
                }
              ]
            })
            .then(async channel => {
              const ww = await send(
                `Successfully Create <#${channel.id}> Category`,
                message
              );
              await ww.react("❌");
              let collector = ww.createReactionCollector(
                (reaction, user) => user.id === message.author.id
              );
              collector.on("collect", async (reaction, user) => {
                if (reaction._emoji.name === "❌") {
                  channel.delete();
                }
              });
            });
        }
        break;
      case "voice":
        {
          if (!args.slice(1).join(" ")) {
            return send("please provide the channel name", message);
          }
          message.guild.channels
            .create(args.slice(1).join(" "), {
              type: "voice",
              permissionOverwrites: [
                {
                  id: client.user.id,
                  allow: 66584384
                }
              ]
            })
            .then(async channel => {
              const dd = await send(
                `Successfully Create <#${channel.id}> Voice`,
                message
              );
              await dd.react("❌");
              let collector = dd.createReactionCollector(
                (reaction, user) => user.id === message.author.id
              );
              collector.on("collect", async (reaction, user) => {
                if (reaction._emoji.name === "❌") {
                  channel.delete();
                }
              });
            });
        }

        //--------------------------------------------------- F U N C T I O N S ---------------------------------------------
        function send(content, message, color) {
          if (!color) color = "GREEN";
          return message.channel.send({
            embed: { description: content, color: color }
          });
        }
    }
  }
};