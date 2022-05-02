const { MessageAttachment } = require('discord.js');
const Canvas = require('canvas');
const { id_kanal_witamy } = require('../config.json');

const applyText = (canvas, member) => {
	const context = canvas.getContext('2d');

	let fontSize = 75;

	do {
		context.font = `${fontSize -= 5}px RobotoSlab`;
	} while (context.measureText(`${member.user.tag}`).width > canvas.width - 300);

	return context.font;
};

module.exports = {
  
  execute(bot){
    
    bot.on("guildMemberAdd", async(member) =>{

      Canvas.registerFont('./assets/Acme-Regular.ttf',{family: 'Acme'});
      Canvas.registerFont('./assets/RobotoSlab-Regular.ttf',{family: 'RobotoSlab'});
      
      const canvas = Canvas.createCanvas(700, 250);
		  const context = canvas.getContext('2d');

      const background = await Canvas.loadImage('./assets/background.jpg');
    	context.drawImage(background, 0, 0, canvas.width, canvas.height);
      context.lineWidth = 5;
      context.strokeStyle = '#FFFFFF';
      context.strokeRect(0, 0, canvas.width, canvas.height);

      context.font = '45px Acme';
    	context.fillStyle = '#ffffff';
    	context.fillText('Witaj!', canvas.width / 1.8, canvas.height / 2.5);
      
      context.font = applyText(canvas, member);
      context.fillStyle = '#ffffff';
      context.fillText(`${member.user.tag}`, canvas.width / 2.5, canvas.height / 1.5);

      const avatar = await Canvas.loadImage(await member.displayAvatarURL({ format: 'jpg' }));

    	context.beginPath();
    	context.arc(125, 125, 100, 0, Math.PI * 2, true);
    	context.closePath();
    	context.clip();
    
    	context.drawImage(avatar, 25, 25, 200, 200);
      context.lineWidth = 5;
      context.strokeStyle = '#FFFFFF';
      context.beginPath();
    	context.arc(125, 125, 100, 0, Math.PI * 2, true);
    	context.closePath();
    	context.stroke();

      
      
      const attachment = new MessageAttachment(canvas.toBuffer(), 'welcome.png');
    	const kanal = await member.guild.channels.fetch(id_kanal_witamy);
      await kanal.send({ files: [attachment] });
      
    })
    
  }
  
}