const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageEmbed, MessageButton } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
              .setName('skargi')
              .setDescription('Wysyła formularz skarg na wybrany kanał')
              .setDefaultPermission(false)
              .addChannelOption(option => option.setName('channel').setDescription('Wybierz kanał').setRequired(true)),
  async execute(interaction) {
    const option = interaction.options.getChannel('channel');
    const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('skargi-admin')
					.setLabel('Do Administracji')
					.setStyle('DANGER'),
        new MessageButton()
					.setCustomId('skargi-animedia')
					.setLabel('Do ANIMEDII')
					.setStyle('DANGER'),
			);
    await option.send({content: 'Jeśli masz jakieś skargi wybierz odpowiedni przycisk i napisz skargę:',components: [buttons] })
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply(`Wysłano formularz skarg na kanał ${option}`);
  }
}