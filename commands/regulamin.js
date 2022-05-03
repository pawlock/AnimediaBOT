const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');
const { admin_id } = require('../assets/config.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('regulamin')
		.setDescription('Wypisuje regulamin z przyciskiem')
    .setDefaultPermission(false),
  async execute(interaction) {
    const akceptuj = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('regulamin-tak')
					.setLabel('Akceptuję')
					.setStyle('SUCCESS'),
        new MessageButton()
					.setCustomId('regulamin-nie')
					.setLabel('Nie akceptuję')
					.setStyle('DANGER'),
			);
    const embed = new MessageEmbed()
			.setColor('#DC143C')
			.setTitle('Regulamin')
			.setDescription('regulamin_opis');

		await interaction.reply({ embeds: [embed], components: [akceptuj] });
  }
};
