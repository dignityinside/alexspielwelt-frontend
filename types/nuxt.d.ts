// types/nuxt.d.ts
export {};

declare module '#app' {
  interface NuxtApp {
    $formatDate(date: string, short?: boolean): string;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $formatDate(date: string, short?: boolean): string;
  }
}
