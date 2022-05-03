module.exports = {
  
  async execute(interaction) {
    const osoba = await interaction.guild.members.fetch(interaction.user.id);
    await interaction.deferReply({ephemeral: true});
    await interaction.editReply('Nie zaakceptowałeś regulaminu');
    await osoba.kick('Nie zaakceptował regulaminu');
  }
  
}