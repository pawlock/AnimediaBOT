const { Modal, TextInputComponent, showModal } = require('discord-modals');

const modal = new Modal()
.setCustomId('rekrutacja-animedia')
.setTitle('Formularz rekrutacji do kanału na YT')
.addComponents(
  new TextInputComponent()
  .setCustomId('rekrutacja-title')
  .setLabel('TYTUŁ')
  .setStyle('SHORT')
  .setMinLength(5)
  .setMaxLength(20)
  .setPlaceholder('Musisz wpisać tytuł')
  .setRequired(true),
  new TextInputComponent()
  .setCustomId('rekrutacja-text')
  .setLabel('TREŚĆ')
  .setStyle('LONG')
  .setMinLength(5)
  .setMaxLength(200)
  .setPlaceholder('Dlaczego powinniśmy wziąć akurat CIEBIE?')
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