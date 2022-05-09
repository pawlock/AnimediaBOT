const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
              .setName('propozycje')
              .setDescription('Wysyła formularz propozycji na wybrany kanał')
              .setDefaultPermission(false)
              .addChannelOption(option => option.setName('channel').setDescription('Wybierz kanał').setRequired(true)),
  async execute(interaction) {
    const option = interaction.options.getChannel('channel');
    const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('propozycje-admin')
					.setLabel('Do Administracji')
					.setStyle('PRIMARY'),
        new MessageButton()
					.setCustomId('propozycje-animedia')
					.setLabel('Do ANIMEDII')
					.setStyle('DANGER'),
			);
    await option.send({content: 'Jeśli masz jakieś propozycje wybierz odpowiedni przycisk i napisz nam ją:',components: [buttons] })
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply(`Wysłano formularz porpozycji na kanał ${option}`);
  }
}