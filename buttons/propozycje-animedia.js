const { Modal, TextInputComponent, showModal } = require('discord-modals');

const modal = new Modal()
.setCustomId('propozycje-animedia')
.setTitle('Formularz propozycji do ANIMEDII')
.addComponents(
  new TextInputComponent()
  .setCustomId('propozycje-title')
  .setLabel('TYTUŁ')
  .setStyle('SHORT')
  .setMinLength(5)
  .setMaxLength(20)
  .setPlaceholder('Musisz wpisać tytuł')
  .setRequired(true),
  new TextInputComponent()
  .setCustomId('propozycje-text')
  .setLabel('TREŚĆ')
  .setStyle('LONG')
  .setMinLength(5)
  .setMaxLength(200)
  .setPlaceholder('Musisz wpisać treść propozycji')
  .setRequired(true)
);

module.exports = {
  
  async execute(interaction) {
    showModal(modal, {
      client: interaction.client,
      interaction: interaction
    })
  }
  
}