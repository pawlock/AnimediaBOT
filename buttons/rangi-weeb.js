const { id_ranga_weeb } = require('../assets/config.json');

module.exports = {
  
  async execute(interaction) {
    const weeb = await interaction.guild.roles.fetch(id_ranga_weeb);
    const osoba = await interaction.guild.members.fetch(interaction.user.id);
    await osoba.roles.add(weeb);
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply('Masz teraz dostęp do kanałów z weeb botami!');
    return;
  }
  
}