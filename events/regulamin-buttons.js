const {weryfikacja_id} = require('../config.json');

module.exports = {
  execute(bot) {
    bot.on("interactionCreate", async interaction => {
      if (!interaction.isButton()) return;
      const weryfikacja = await interaction.guild.roles.fetch(weryfikacja_id);
      const osoba = await interaction.guild.members.fetch(interaction.user.id);
      await osoba.roles.add(weryfikacja);
      await interaction.deferReply({ephemeral: true});
      await interaction.editReply('Zaakceptowałeś regulamin');
      return;
    })
  }
}