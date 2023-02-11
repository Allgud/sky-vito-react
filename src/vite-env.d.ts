/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_API_URL: string,
    readonly VITE_DELAY: number,
    readonly VITE_MAX_IMAGES_COUNT: number,
    readonly VITE_MIN_IMAGES_COUNT: number,
    readonly VITE_CARDS_PAGE_COUNT: number
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }
