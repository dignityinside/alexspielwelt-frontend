export default defineNuxtPlugin(() => {
  return {
    provide: {
      storage: {
        getItem(item: string) {
          if (import.meta.client) {
            return localStorage.getItem(item);
          }
        },
        setItem(item: string, value: string) {
          if (import.meta.client) {
            return localStorage.setItem(item, value);
          }
        },
      },
    },
  };
});
