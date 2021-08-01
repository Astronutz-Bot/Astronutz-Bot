const Discord = require('discord.js');
const config = require('../../config');
const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');

module.exports = {
 
        name: 'country',
        description: 'Get some information about country!',
        aliases: ["coinfo"],
        usage: '<prefix>country <country name>',
        accessableby: "",
         category: "<a:TCC__loading:853575956446838785> Info",

    run: async (client, message, args) => {
    const country = args.slice().join(' ');
		if(!country) {
			return message.channel.send(
				'<:TCC_HmmEyes:852844472461950986> | Please provide a valid Country that exist.',
			);
		}
		const url = 'https://restcountries.eu/rest/v2/name/' + country;

		let response;
		try {
			response = await fetch(url).then(res => res.json());
		}
		catch (e) {
			return message.channel.send(
				':x:An error occured, please try again!',
			);
		}
		try{
			const data = response[0];
			const embed = new MessageEmbed()
				.setColor(config.embedcolor)
				.setTitle(data.name)
				.setThumbnail(`https://www.countryflags.io/${data.alpha2Code}/flat/64.png`)
				.setFooter(`Requested by ${message.author.tag}`)
				.setTimestamp()
				.addFields(
					{ name: 'Native Name', value: `\`\`\`${data.nativeName}\`\`\``, inline: true },
					{ name: 'Capital', value: `\`\`\`${data.capital ? data.capital : 'None'}\`\`\``, inline: true },
					{ name: 'Location', value: `\`\`\`${data.subregion ? data.subregion : data.region}\`\`\``, inline: true },
					{ name: 'Currency', value: `\`\`\`${data.currencies[0].code} ${data.currencies[0].symbol}\`\`\``, inline: true },
					{ name: 'Population', value: `\`\`\`${data.population.toLocaleString()}\`\`\``, inline: true },
					{ name: 'Area', value: `\`\`\`${data.area.toLocaleString()}km\`\`\``, inline: true },
					{ name: 'Languages', value: `\`\`\`${data.languages.map(lang => lang.name).join('/')}\`\`\`` },
				);
			message.channel.send(embed);
		}
		catch{
			return message.channel.send(
				':x: Please provide a valid country.',
			);
		}
    }
}