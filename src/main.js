const { app, BrowserWindow, ipcMain, nativeTheme } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  const isWindows = process.platform === 'win32';
  const isMac = process.platform === 'darwin';
  
  mainWindow = new BrowserWindow({
    width: 380,
    height: 600,
    frame: isWindows,
    transparent: isMac,
    titleBarStyle: isMac ? 'hiddenInset' : 'default',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    },
    resizable: true
  });

  mainWindow.loadFile('src/index.html');
  
  if (process.env.NODE_ENV === 'development') {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

ipcMain.handle('get-platform', () => process.platform);
ipcMain.handle('get-theme', () => nativeTheme.shouldUseDarkColors ? 'dark' : 'light');