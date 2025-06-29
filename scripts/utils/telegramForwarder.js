const axios = require('axios');

module.exports = async (message) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) return;

  const text = `📩 Pesan baru dari ${message.from}:\n${message.body}`;
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  await axios.post(url, {
    chat_id: chatId,
    text: text
  });
};
