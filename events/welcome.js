const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');

module.exports = {
  
  execute(bot){
    
    bot.on("guildMemberAdd", async(member) =>{
      
      const canvas = Canvas.createCanvas(700, 250);
		  const context = canvas.getContext('2d');

      const background = await Canvas.loadImage('./assets/background.jpg');
    	context.drawImage(background, 0, 0, canvas.width, canvas.height);

      const avatar = await Canvas.loadImage(await member.displayAvatarURL({ format: 'jpg' }));

    	context.beginPath();
    	context.arc(125, 125, 100, 0, Math.PI * 2, true);
    	context.closePath();
    	context.clip();

    	context.drawImage(avatar, 25, 25, 200, 200);
      
      const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome.png');
    	const kanal = await member.guild.channels.fetch('970335062715428894');
      await kanal.send({ files: [attachment] });
      
    })
    
  }
  
}