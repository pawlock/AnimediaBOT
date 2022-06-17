const { id_ranga_gry } = require('../assets/config.json');

module.exports = {
  
  async execute(interaction) {
    const gry = await interaction.guild.roles.fetch(id_ranga_gry);
    const osoba = await interaction.guild.members.fetch(interaction.user.id);
    await osoba.roles.add(gry);
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply('Masz teraz dostęp do kanałów z grami!');
    return;
  }
  
}