const { MessageEmbed } = require("discord.js");
let questions = [
  {
    title: "Which of these badges is 24month boost?",
    options: ["<:TCC_boosting24month:853575966378295297>", "<:TCC_boosting18month:853575963399684127>", "<:TCC_boosting15month:853575964356902922>", "<:TCC_boosting12month:853575961835470899>"],
    correct: 1,
  },
  {
    title: "Who have most subscriber in Youtube?",
    options: ["KP18 Gamer", "PewDiePie", "T-series", "Retro Gaming"],
    correct: 3,
  },
  {
    title: "Who is owner of this bot? ",
    options: ["Aviyan Dhakal", "Diwas Atreya", "Arpan Regmi", "Aabiskar Dawadi"],
    correct: 2,
  },
{
    title: "When did corona started to attack? ",
    options: ["2011", "2018", "2019", "2020"],
    correct: 3,
  },
{
    title: "Where does Mt.Everest lies? ",
    options: ["Africa", "Asia", "America", "Australia"],
    correct: 2,
  },
];
module.exports = {
  name: "trivia",
  description: "Test your knowledge!",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  run: async (bot, message, args) => {
    let q = questions[Math.floor(Math.random() * questions.length)];
    let i = 0;
    const Embed = new MessageEmbed()
      .setTitle(q.title)
      .setDescription(
        q.options.map((opt) => {
          i++;
          return `${i} - ${opt}\n`;
        })
      )
      .setColor(`GREEN`)
      .setThumbnail(`https://media.discordapp.net/attachments/855062505201467402/855277891558441000/trivia-night-announcement-neon-signboard_118419-49.png?width=433&height=433`)
      .setFooter(
        `Reply to this message with the correct question number! You have 15 seconds.`
      );
    message.channel.send(Embed);
    try {
      let msgs = await message.channel.awaitMessages(
        (u2) => u2.author.id === message.author.id,
        { time: 15000, max: 1, errors: ["time"] }
      );
      if (parseInt(msgs.first().content) == q.correct) {
        return message.channel.send(`<a:cc_gtick:839421891331751956> | You got it correct!
        `);
      } else {
        return message.channel.send(`<a:TCC_Sobbing:853561196221693952>  | You got it incorrect.`);
      }
    } catch (e) {
      return message.channel.send(`<:zTW_zayaangry:852873101128761364> | You did not answer!\n
      **Is this bug?** Make sure to report in our server. \nhttps://discord.gg/gU7XAxTpX5`);
    }
  },
};