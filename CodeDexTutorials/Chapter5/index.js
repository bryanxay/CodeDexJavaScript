const musicPlaylist = [
  "Tom Sawyer",
  "Sabotage",
  "I Wanna Dance With Somebody",
  "Don't Speak",
  "Bulls On Parade",
  "Thriller",
  "The Breaks",
  "Brick",
  "Aeroplane Over the Sea",
  "Tubthumping"
];

const shiftedElement = musicPlaylist.shift();
const poppedElement = musicPlaylist.pop();

musicPlaylist.push("BigOlBird", "MiniLowesBucket");
console.log(shiftedElement);
console.log(poppedElement);
console.log(musicPlaylist);