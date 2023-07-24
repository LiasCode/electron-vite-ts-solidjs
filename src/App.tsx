import { createSignal } from "solid-js";
import solidLogo from "@/assets/solid.svg";
import viteLogo from "@/assets/vite.svg";
import electronLogo from "@/assets/Electron_Software_Framework_Logo.svg.png";
import typescriptLogo from "@/assets/typescript-design-assets/ts-logo-512.png";
import "@/App.css";

function App() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <div>
        <a
          href="https://www.electronjs.org/"
          target="_blank"
        >
          <img
            src={electronLogo}
            class="logo electron"
            alt="Electron Logo"
          />
        </a>
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
        >
          <img
            src={typescriptLogo}
            class="logo ts"
            alt="TypeScript Logo"
          />
        </a>
        <a
          href="https://vitejs.dev"
          target="_blank"
        >
          <img
            src={viteLogo}
            class="logo vite"
            alt="Vite logo"
          />
        </a>
        <a
          href="https://solidjs.com"
          target="_blank"
        >
          <img
            src={solidLogo}
            class="logo solid"
            alt="Solid logo"
          />
        </a>
      </div>

      <h1>Electron + TypeScript + Vite + Solid</h1>

      <div class="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count()}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p class="read-the-docs">
        Click on the Electron, TypeScript, Vite and Solid logos to learn more
      </p>
    </>
  );
}

export default App;
