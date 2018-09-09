// node.js API: https://nodejs.org/api/
// Electron API: https://electronjs.org/docs/api

// "Import" the app and BrowserWindow objects from the electron library.
const {app, BrowserWindow} = require('electron');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadFile('index.html');
  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);
