const { id_ranga_gry, id_ranga_anime, id_ranga_weeb } = require('../assets/config.json');

module.exports = {
  
  async execute(interaction) {
    const gry = await interaction.guild.roles.fetch(id_ranga_gry);
    const anime = await interaction.guild.roles.fetch(id_ranga_anime);
    const weeb = await interaction.guild.roles.fetch(id_ranga_weeb);
    const osoba = await interaction.guild.members.fetch(interaction.user.id);
    await osoba.roles.remove(gry);
    await osoba.roles.remove(anime);
    await osoba.roles.remove(weeb);
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply('Wyczyszczono!');
    return;
  }
  
}