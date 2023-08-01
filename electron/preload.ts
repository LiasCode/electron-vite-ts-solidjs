import { contextBridge } from "electron"
import { ipcRenderer } from "electron";
import type { IElectronAPI } from "../src/renderer.d.ts"


const ElectronAPI: IElectronAPI = {
  greets(): Promise<void> {
    return ipcRenderer.invoke("greet")
  }
}

contextBridge.exposeInMainWorld("electronAPI", ElectronAPI);

