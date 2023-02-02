/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string,
    readonly VITE_DELAY: number,
    readonly VITE_MAX_IMAGES_COUNT,
    readonly VITE_MIN_IMAGES_COUNT
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
