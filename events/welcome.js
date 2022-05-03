const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const { id_kanal_witamy } = require('../assets/config.json');

module.exports = {
  
  execute(bot){

    const applyText = (canvas, member) => {
    	const context = canvas.getContext('2d');
    
    	let fontSize = 75;
    
    	do {
    		context.font = `${fontSize -= 10}px IBM`;
    	} while (context.measureText(`${member.user.tag}`).width > canvas.width - 300);
    
    	return context.font;
    };
    
    bot.on("guildMemberAdd", async(member) =>{

      Canvas.registerFont('./assets/IBM.ttf',{family: 'IBM'});
      
      const canvas = Canvas.createCanvas(700, 250);
		  const context = canvas.getContext('2d');

      const background = await Canvas.loadImage('./assets/background.jpg');
    	context.drawImage(background, 0, 0, canvas.width, canvas.height);
      
      context.font = applyText(canvas, member);
      context.fillStyle = '#000000';
      context.fillText(`${member.user.tag}`, canvas.width / 2.7, canvas.height / 1.7);

      const avatar = await Canvas.loadImage(await member.displayAvatarURL({ format: 'jpg' }));

    	context.beginPath();
    	context.arc(135, 125, 100, 0, Math.PI * 2, true);
    	context.closePath();
    	context.clip();
    
    	context.drawImage(avatar, 35, 25, 200, 200);
      context.lineWidth = 10;
      context.strokeStyle = '#000000';
      context.beginPath();
    	context.arc(135, 125, 100, 0, Math.PI * 2, true);
    	context.closePath();
    	context.stroke();

      
      
      const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome.png');
    	const kanal = await member.guild.channels.fetch(id_kanal_witamy);
      await kanal.send({content: `${member} Witaj na **ANIMEDII**`, files: [attachment] });
      
    })
    
  }
  
}