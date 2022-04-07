const { Client, Intents,  MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const regulamin = "Postanowienia ogólne. \n1. Wchodząc na serwer discord, akceptujesz nasz regulamin. \n2. Regulamin może w każdej chwili ulec zmianie bez wcześniejszego informowania o tym. \n3. Jeśli nie rozumiesz któregoś z podpunktów regulaminu — skontaktuj się z administracją. \n4. Wszelkie błędy i niedociągnięcia związane z funkcjonowaniem serwera należy natychmiast zgłaszać administracji.\n5. Rzeczy nie uwzględnione w regulaminie podlegają rozstrzygnięciu przez administratora serwera.\n6. Każdy administrator ma obowiązek udzielić pomocy użytkownikowi, jeśli ten jej potrzebuje.\n7. Administrator powinien dawać dobry przykład użytkownikom.\n8. Nieznajomość regulaminu nie zwalnia użytkownika z jego przestrzegania.\n9. Zachowuj się jak człowiek.\n10. Administracja ma obowiązek podania powodu kary."

const client = new Client({
  presence: {
        status: 'online',
        afk: false,
        activities: [{
            name: "MiraiCODE",
            type: "LISTENING",
        }],
  },
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS]
});

const commands = [];
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
  const cmd = command.data.toJSON();
  cmd.execute = command.execute;
  cmd.permissions = command.permissions;
	commands.push(cmd);
}

for (const file of eventFiles) {
  const ev = require(`./events/${file}`);
  ev.event(client);
}

const rest = new REST({ version: '9' }).setToken(process.env['token']);

client.on("ready", async () => {
  
(async () => {
  const guilds = client.guilds.cache;
  for (const guild of guilds) {
    
    try {
      
		  await rest.put(
  			Routes.applicationGuildCommands(client.user.id, guild[0]),
  			{ body: commands },
      );
      const restCommands = await guild[1].commands.fetch();
      
      for (const command of restCommands) {
        const cmd = commands.filter(c => c.name === command[1].name) || [];
        if (cmd.length == 0) continue;
        const permissions = cmd[0].permissions;
        await command[1].permissions.set({permissions});
      }
      
  	} catch (error) {
      
  		console.error(error);
      
  	}
  }});
  
  console.log(client.user.username, client.user.id);
});


client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
  const command = commands.filter(cmd => cmd.name === interaction.commandName) || [];
  if (command.length == 0) return;
  try {
    await command[0].execute(interaction, regulamin);
  } catch (error) {
    console.log(error);
  }
});


client.login(process.env['token']);
const http = require('http');
http.createServer((req, res) => {
  res.write("OK");
  res.end();
}).listen(3000);
