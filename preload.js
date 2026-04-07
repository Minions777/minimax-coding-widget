const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  showNotification: (title, body) => ipcRenderer.invoke('show-notification', { title, body }),
  onRefreshData: (callback) => {
    ipcRenderer.on('refresh-data', () => callback());
    return () => ipcRenderer.removeListener('refresh-data', callback);
  },
  isElectron: true,
  platform: process.platform
});

console.log('Preload script loaded');