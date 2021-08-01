const db = require("quick.db");

module.exports = {
  name: "warning",
  description: "Get the warnings of yours or mentioned person",
  category: "<a:TCC__jojo:853575958517907496>  Moderation",
  run: (client, message, args) => {
    const user = message.mentions.members.first() || message.author;

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) warnings = 0;

    message.channel.send(`${user} have **${warnings}** warning(s)`);
  }
};
