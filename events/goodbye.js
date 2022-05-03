const { id_kanal_żegnamy } = require('../assets/config.json');
const { random } = require('../assets/emotki-goodbye.js')

module.exports = {
  
  execute(bot){

    bot.on("guildMemberRemove", async(member) =>{
      const kanal = await member.guild.channels.fetch(id_kanal_żegnamy);
      const emotka = await random();
      kanal.send(`**${member.user.tag}** właśnie nas opuścił/ła  ${emotka}`);
    });
    
  }
  
}