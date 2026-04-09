document.addEventListener('DOMContentLoaded', function() {
  const caja = document.getElementById('texto');
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    let url = tabs[0].url;
    chrome.storage.local.get([url], function(res) {
      if (res[url]) caja.value = res[url];
    });
    document.getElementById('btn').onclick = function() {
      let datos = {};
      datos[url] = caja.value;
      chrome.storage.local.set(datos);
      alert("¡Guardado!");
    };
  });
});
