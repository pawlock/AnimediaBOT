const { Modal, TextInputComponent, showModal } = require('discord-modals');

const modal = new Modal()
.setCustomId('skargi-admin')
.setTitle('Formularz skargi do Administracji')
.addComponents(
  new TextInputComponent()
  .setCustomId('skargi-title')
  .setLabel('TYTUŁ')
  .setStyle('LONG')
  .setMinLength(5)
  .setMaxLength(20)
  .setPlaceholder('Musisz wpisać tytuł')
  .setRequired(true),
  new TextInputComponent()
  .setCustomId('skargi-text')
  .setLabel('TREŚĆ')
  .setStyle('LONG')
  .setMinLength(5)
  .setMaxLength(200)
  .setPlaceholder('Musisz wpisać treść skargi')
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