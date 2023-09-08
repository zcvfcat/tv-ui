export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENVIRONMENT: 'local' | 'dev' | 'production'
      UI_BASE_URL: string
      API_BASE_URL: string
    }
  }
}
