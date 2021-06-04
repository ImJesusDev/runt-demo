const { app, BrowserWindow, ipcMain, Menu } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    show: false,
    frame: true,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      allowRunningInsecureContent: true,
      contextIsolation: false,
    },
  });

  win.loadFile('index.html', { userAgent: 'Chrome' });
  win.maximize();
  // win.removeMenu();
  win.show();

  // win.webContents.openDevTools();

  //NIT
  //8301081162
  //PLACA
  // BCD396

  //HKQ558
  //51914792
  //123123123
  //Paynet2021*
  //ultraconcept
  //Ultraconcept123*
  // Extranjero: AF190CM
  // QrH#e*Is

  // SZV02E
  // 80069756
}

app
  .whenReady()
  .then(createWindow)
  .then(() => {});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
