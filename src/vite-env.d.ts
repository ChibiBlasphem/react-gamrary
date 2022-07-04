/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAWG_APIKEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
