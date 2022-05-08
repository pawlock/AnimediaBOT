const { MessageEmbed } = require('discord.js');
const { id_kanal_r_admin } = require('../assets/config.json');


module.exports = {
  
  async execute(modal,bot){
    
    const title = await modal.getTextInputValue('rekrutacja-title');
    const text = await modal.getTextInputValue('rekrutacja-text');

    const embed = new MessageEmbed()
      .setAuthor(modal.member.displayName, modal.member.displayAvatarURL(), '')
			.setColor('#00d0ff')
			.setTitle("Rekrutacja")
			.setDescription(title)
      .setThumbnail(modal.member.displayAvatarURL())
      .addFields(
		{ name: 'Treść:', value: text },);
    
    
    const kanal = await bot.channels.fetch(id_kanal_r_admin);
    kanal.send({embeds: [embed]});
    await modal.deferReply({ ephemeral: true })
    modal.followUp({ content: 'Wysłano twoją aplikację do administracji!', ephemeral: true })
  
  }
  
}