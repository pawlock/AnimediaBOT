const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');
const {admin_id} = require('../config.json');
const { regulamin_opis } = require('../dane.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('regulamin')
		.setDescription('Wypisuje regulamin z przyciskiem')
    .setDefaultPermission(false),
  permissions: [
    {id: admin_id , type: "ROLE", permission: true}
  ],
  async execute(interaction) {
    const akceptuj = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('akceptuj')
					.setLabel('Akceptuj')
					.setStyle('SUCCESS'),
			);
    const embed = new MessageEmbed()
			.setColor('#DC143C')
			.setTitle('Regulamin')
			.setDescription(regulamin_opis);

		await interaction.reply({ embeds: [embed], components: [akceptuj] });
  }
};
