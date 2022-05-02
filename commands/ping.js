const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
  data: new SlashCommandBuilder()
              .setName('ping')
              .setDescription('Testowa komenda')
              .setDefaultPermission(false),
  async execute(interaction) {
    await interaction.reply({content: 'Pong!', ephemeral: true})
  }
}