/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_SOME_KEY: number
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }