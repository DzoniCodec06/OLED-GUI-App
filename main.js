const { app, BrowserWindow } = require("electron");

const SCREEN_WIDTH = 900;
const SCREEN_HEIGHT = 500;

const createWindow = () => {
    const win = new BrowserWindow({
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
        autoHideMenuBar: true,
        webPreferences: {
            devTools: true
        }
    });

    win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})


app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
})


