const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
              .setName('rangi')
              .setDescription('Wysyła na wybrany kanał możliwość wyboru rang')
              .setDefaultPermission(false)
              .addChannelOption(option => option.setName('channel').setDescription('Wybierz kanał').setRequired(true)),
  async execute(interaction) {
    const option = interaction.options.getChannel('channel');
    const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('rangi-anime')
					.setLabel('Anime / Manga')
					.setStyle('PRIMARY'),
        new MessageButton()
					.setCustomId('rangi-gry')
					.setLabel('Gry')
					.setStyle('SECONDARY'),
        new MessageButton()
					.setCustomId('rangi-weeb')
					.setLabel('Weeb boty')
					.setStyle('SUCCESS'),
        new MessageButton()
					.setCustomId('rangi-clear')
					.setLabel('Wyczyść')
					.setStyle('DANGER'),
			);
    await option.send({content: 'Aby mieć dostęp do kanałów kliknij w odpowiadający przycisk:',components: [buttons] });
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply('Wysłano wiadomość z rangami');
  }
}