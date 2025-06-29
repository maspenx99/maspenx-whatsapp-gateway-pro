const axios = require('axios');

module.exports = async (message) => {
  const url = process.env.WEBHOOK_URL;
  if (!url) return;

  await axios.post(url, {
    from: message.from,
    body: message.body,
    type: message.type,
    timestamp: message.timestamp,
    isGroup: message.isGroupMsg || false
  });
};
