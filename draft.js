'use strict';

const regisArray = [
  'https://pbs.twimg.com/media/FNdUBCoVIAAtw_3?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT-SzVUAceo4b?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT2pFVcAI2wj2?format=png&name=small',
  'https://pbs.twimg.com/media/FNdT0RWVIAAwTEd?format=png&name=small',
  'https://pbs.twimg.com/media/FNdTtokVcAA8tUY?format=png&name=small',
];

function replace() {
  const pageImages = document.getElementsByTagName('img');
  for (let i = 0; i < pageImages.length; i++) {
    const regisPhoto = Math.floor(Math.random() * regisArray.length);
    pageImages[i].src = regisArray[regisPhoto];
  }

  // chrome.storage.sync.set({
  //   photos: pageImages.length,
  // });
}

chrome.storage.sync.get(
  {
    enabled: false,
  },
  function (items) {
    if (items.enabled) {
      // let css = document.createElement('style');
      // const regisPhoto = Math.floor(Math.random() * regisArray.length);
      // css.innerHTML =
      //   'img { content: url("' + regisArray[regisPhoto] + '") !important; }';
      // document.body.appendChild(css);
      // window.setInterval(replace, 3000);
      // replace();
      // ----------------------------------------------
      // const pageImages = document.getElementsByTagName('img');
      // for (let i = 0; i < pageImages.length; i++) {
      //   const regisPhoto = Math.floor(Math.random() * regisArray.length);
      //   let css = document.createElement('style');
      //   css.innerHTML =
      //     'img { content: url("' + regisArray[i] + '") !important; }';
      //   document.body.appendChild(css);
      //   pageImages[i].src = regisArray[regisPhoto];
      // }
      // Bark Audio
      const audioUrl = 'https://freewavesamples.com/files/Dog-Bark.wav';

      // Detect all click events on the document
      document.addEventListener('click', function (event) {
        new Audio(audioUrl).play();
      });

      // Detect all keys fire
      document.addEventListener('keyup', function (event) {
        new Audio(audioUrl).play();
      });

      window.setInterval(replace, 1000);
    }
  }
);
