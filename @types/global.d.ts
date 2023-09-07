export declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TEST: "local" | "dev" | "production"
    }
  }
}
