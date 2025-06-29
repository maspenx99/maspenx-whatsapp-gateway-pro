const fs = require('fs');
const path = require('path');

module.exports = async (client, message) => {
  const buffer = await client.downloadMedia(message);
  const mediaFolder = path.resolve(__dirname, '../../media');
  const filename = path.join(mediaFolder, `${Date.now()}-${message.type}.bin`);
  fs.writeFileSync(filename, buffer);
  console.log('Media saved to', filename);
};
