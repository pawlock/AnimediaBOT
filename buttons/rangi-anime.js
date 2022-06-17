const { id_ranga_anime } = require('../assets/config.json');

module.exports = {
  
  async execute(interaction) {
    const anime = await interaction.guild.roles.fetch(id_ranga_anime);
    const osoba = await interaction.guild.members.fetch(interaction.user.id);
    await osoba.roles.add(anime);
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply('Masz teraz dostęp do kanałów z anime i mangami!');
    return;
  }
  
}