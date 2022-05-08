const { Formatters, MessageEmbed } = require('discord.js');
const { id_kanal_sp_animedia } = require('../assets/config.json');


module.exports = {
  
  async execute(modal,bot){
    
    const title = await modal.getTextInputValue('propozycje-title');
    const text = await modal.getTextInputValue('propozycje-text');

    const embed = new MessageEmbed()
      .setAuthor(modal.member.displayName, modal.member.displayAvatarURL(), '')
			.setColor('#40CC99')
			.setTitle("Propozycja")
			.setDescription(title)
      .setThumbnail(modal.member.displayAvatarURL())
      .addFields(
		{ name: 'Treść propozycji:', value: text },);
    
    
    const kanal = await bot.channels.fetch(id_kanal_sp_animedia);
    kanal.send({embeds: [embed]});
    await modal.deferReply({ ephemeral: true })
    modal.followUp({ content: 'Wysłano propozycję do ANIMEDII:' + Formatters.codeBlock('markdown', text), ephemeral: true })
  
  }
  
}