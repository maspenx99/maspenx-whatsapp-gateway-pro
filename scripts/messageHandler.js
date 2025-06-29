const saveMedia = require('./utils/mediaSaver');
const forwardToTelegram = require('./utils/telegramForwarder');
const forwardToN8N = require('./utils/n8nForwarder');

module.exports = async (client, message) => {
  if (message.isMedia || message.isMMS || message.type === 'image') {
    await saveMedia(client, message);
  }
  await forwardToTelegram(message);
  await forwardToN8N(message);
};
