const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('minimaxAPI', {
  getPlatform: () => ipcRenderer.invoke('get-platform'),
  getTheme: () => ipcRenderer.invoke('get-theme'),
});