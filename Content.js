const regisArray = [
  'https://pbs.twimg.com/media/FNdUBCoVIAAtw_3?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT-SzVUAceo4b?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT2pFVcAI2wj2?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT0RWVIAAwTEd?format=png&name=small',
  'https://pbs.twimg.com/media/FNdTtokVcAA8tUY?format=png&name=small',
];

for (let i = 0; i < pageImages.length; i++) {
  const pageImages = document.getElementsByTagName('img');
  const regisPhoto = Math.floor(Math.random() * regisArray.length);
  pageImages[i].src = regisArray[regisPhoto];
}

// Bark Audio
const audioUrl = 'https://freewavesamples.com/files/Dog-Bark.wav';

// Detect all click events on the document
document.addEventListener('click', function (event) {
  new Audio(audioUrl).play();
});

// Detect all keys fire
// document.addEventListener('keyup', function (event) {
//   new Audio(audioUrl).play();
// });
