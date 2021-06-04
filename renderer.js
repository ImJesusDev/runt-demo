/* Runt */
const runtWebview = document.getElementById('runt-webview');

console.log('renderer');
setTimeout(() => {
  runtWebview.openDevTools();
}, 3000);
