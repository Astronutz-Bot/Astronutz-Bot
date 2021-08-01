const Discord = module.require("discord.js");

module.exports = {
 
    name: "deleterole",
    description: "Deletes a role",
     category: "<a:TCC_hype:852863775924027392>  Utility",
   aliases: ["dr"],
    run: async(client, message, args) => {
    const role = message.mentions.roles.first();
    if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send("You don't have enough Permissions")
    }
    if (!role) {
    return message.channel.send("Usage: <prefix> delrole <role>")
    }
    role.delete();
    const embed = new Discord.MessageEmbed()
    .setTitle("Roles Update")
    .setDescription (`<a:cc_gtick:839421891331751956> Sucessfully deleted given role!`)
    .setColor("RANDOM");
  await message.channel.send(embed);
}
}