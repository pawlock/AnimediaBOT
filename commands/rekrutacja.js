const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
              .setName('rekrutacja')
              .setDescription('Wysyła formularz rekrutacji na wybrany kanał')
              .setDefaultPermission(false)
              .addChannelOption(option => option.setName('channel').setDescription('Wybierz kanał').setRequired(true)),
  async execute(interaction) {
    const option = interaction.options.getChannel('channel');
    const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('rekrutacja-admin')
					.setLabel('Pomoc przy Discordzie')
					.setStyle('PRIMARY'),
        new MessageButton()
					.setCustomId('rekrutacja-animedia')
					.setLabel('Pomoc przy Kanale YT')
					.setStyle('DANGER'),
			);
    await option.send({content: 'Jeśli chcesz pomóc przy projekcie ANIMEDII kliknij odpowiedni przycisk',components: [buttons] })
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply(`Wysłano formularz rekrutacji na kanał ${option}`);
  }
}