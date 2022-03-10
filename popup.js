function restore() {
  chrome.storage.sync.get(
    {
      enabled: false,
    },
    function (items) {
      document.getElementById('enabled').checked = items.enabled;
    }
  );
}

function changed() {
  document.getElementById('submit').value = 'Save';
}

function save() {
  chrome.storage.sync.set(
    {
      enabled: document.getElementById('enabled').checked,
    },
    function () {
      document.getElementById('submit').value = 'Saved';
    }
  );
}

// function showLength() {
//   chrome.storage.sync.get({ photos: pageImages.length }, function (items) {
//     console.log(items.photos);
//     document.getElementById('photoSwap').innerText = items.photos;
//   });
// }

document.addEventListener('DOMContentLoaded', restore);

document.getElementById('submit').addEventListener('click', save);

document.getElementById('enabled').addEventListener('click', changed);

// showLength();
