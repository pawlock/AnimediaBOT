const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
        		.setName('regulamin')
        		.setDescription('Umożliwia edycję Regulaminu')
            .setDefaultPermission(false)
            .addChannelOption(option =>
              option.setName('channel-update')
              .setDescription('Wybierz kanał z którego wziąć zaktualizowany regulamin')
              .setRequired(true))
          .addChannelOption(option => 
            option.setName('channel-old')
            .setDescription('Wybierz kanał z obecnym regulaminem')
            .setRequired(true)),
  
  async execute(interaction) {
    const channel_update = interaction.options.getChannel('channel-update');
    const channel_old = interaction.options.getChannel('channel-old');

    const messages_update = await channel_update.messages.fetch();
    const reg = await messages_update.filter(m => m.author.id == interaction.user.id).first();
    const messages_old = await channel_old.messages.fetch();
    
    try{
      const test = reg.content;
    }catch(e){
      await interaction.deferReply({ephemeral: true});
      await interaction.editReply('Nie wysłałeś żadnego regulaminu!');
      return;
    }

    const buttons = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('regulamin-tak')
					.setLabel('Akceptuję')
					.setStyle('SUCCESS'),
        new MessageButton()
					.setCustomId('regulamin-nie')
					.setLabel('Nie akceptuję')
					.setStyle('DANGER'),
			);
    
    let i = 0;
    for (const message of messages_old){
      if(message[1].author.id == interaction.client.user.id){
        i += 1;
        await message[1].edit({content: reg.content, components: [buttons]});
      }else{
        message[1].delete();
      }
    }
    if(i==0){
      await option.send({content: reg.content, components: [buttons]});
    }

    await interaction.deferReply({ephemeral: true});
    await interaction.editReply('regulamin wysłany!');

  }
};
