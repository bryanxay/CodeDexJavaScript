const dnaPieces = ["A", "C", "G", "T"];
const myDNA = [];


for (let i = 0; i < 24; i++){
  const index1 = Math.floor(Math.random() * dnaPieces.length);
  const index2 = Math.floor(Math.random() * dnaPieces.length);
  const index3 = Math.floor(Math.random() * dnaPieces.length);
  
  const newPiece = dnaPieces[index1] + dnaPieces[index2] + dnaPieces[index3]
  myDNA.push(newPiece);
}
console.log(myDNA);
