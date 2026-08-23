const fs = require('fs');
const path = require('path');

const publicDir = 'c:/Users/Sharafath/Desktop/Website/OneKeyz/OneKeyz/public';
const files = fs.readdirSync(publicDir);

console.log('Current files in public:');
files.forEach(f => console.log(' -', f));

files.forEach(file => {
  let newName = null;
  if (file.includes('ashamed of me')) {
    newName = 'video-real-session.mp4';
  } else if (file.includes('Reminiscing')) {
    newName = 'video-acapella-zeffir.mp4';
  } else if (file.includes('difference')) {
    newName = 'video-vocal-harmony.mp4';
  } else if (file.includes('past is in your head')) {
    newName = 'editorial-fashion-shoot.jpg';
  } else if (file.includes('chrisbrownofficial')) {
    newName = 'chris-brown-concert.jpg';
  }

  if (newName) {
    fs.renameSync(path.join(publicDir, file), path.join(publicDir, newName));
    console.log(`SUCCESS: Renamed "${file}" -> "${newName}"`);
  }
});
