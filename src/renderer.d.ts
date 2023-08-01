export interface IElectronAPI {
  greets: () => Promise<void>;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI
  }
}
