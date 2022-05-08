const { Formatters, MessageEmbed } = require('discord.js');
const { id_kanal_s_animedia } = require('../assets/config.json');


module.exports = {
  
  async execute(modal,bot){
    
    const title = await modal.getTextInputValue('skargi-title');
    const text = await modal.getTextInputValue('skargi-text');

    const embed = new MessageEmbed()
      .setAuthor(modal.member.displayName, modal.member.displayAvatarURL(), '')
			.setColor('#DC143C')
			.setTitle("Skarga")
			.setDescription(title)
      .setThumbnail(modal.member.displayAvatarURL())
      .addFields(
		{ name: 'Treść skargi:', value: text },);
    
    
    const kanal = await bot.channels.fetch(id_kanal_s_animedia);
    kanal.send({embeds: [embed]});
    await modal.deferReply({ ephemeral: true })
    modal.followUp({ content: 'Wysłano skargę do ANIMEDII:' + Formatters.codeBlock('markdown', text), ephemeral: true })
  
  }
  
}