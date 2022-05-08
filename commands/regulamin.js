const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('regulamin')
		.setDescription('Umożliwia edycję Regulaminu')
    .setDefaultPermission(false),
  async execute(interaction) {
    const buttons = new MessageActionRow()
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

		await interaction.reply({ embeds: [embed], components: [buttons] });
  }
};
