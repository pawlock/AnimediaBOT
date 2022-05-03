const { id_ranga_weryfikacja } = require('../assets/config.json');

module.exports = {
  
  async execute(interaction) {
    const weryfikacja = await interaction.guild.roles.fetch(id_ranga_weryfikacja);
    const osoba = await interaction.guild.members.fetch(interaction.user.id);
    await osoba.roles.add(weryfikacja);
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply('Zaakceptowałeś regulamin');
    return;
  }
  
}