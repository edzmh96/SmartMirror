'use strict'

const electron = require('electron');
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

//Quit when all windows are closed
app.on('window-all-closed', function(){
	// On OS-X if windows are closed app might still be running unless user explicitly uses Cmd + Q
	if(process.platform != 'darwin'){
		app.quit();
	}
})


app.on('ready', function(){
	// create the browser window
	mainWindow = new BrowserWindow({width: 800, height: 600});

	//load index.html
	mainWindow.loadURL('file://' + __dirname + '/index.html');

	//open Dev Tools
	mainWindow.webContents.openDevTools();

	//called when window is closed
	mainWindow.on('closed', function(){
		mainWindow = null;
	});
});


