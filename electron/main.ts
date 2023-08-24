import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import isDev from "electron-is-dev";

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      sandbox: true,
      nodeIntegration: false,
      nodeIntegrationInWorker: false,
      devTools: isDev,
      minimumFontSize: 16,
      defaultEncoding: "UTF-8",
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
    },
    center: true,
    darkTheme: true,
  });

  const urlDev = "http://localhost:3030/";
  const IndexHtmlPath = path.join(__dirname, "../build-ui/index.html");

  console.log({ IndexHtmlPath });
  mainWindow.loadURL(isDev ? urlDev : `file://${IndexHtmlPath}`);

  // and load the index.html of the app.
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

ipcMain.handle("greet", () => {
  console.log("greeting from the renderer process");
});
