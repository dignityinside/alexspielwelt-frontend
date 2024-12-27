export default defineNuxtPlugin(() => {
  return {
    provide: {
      storage: {
        getItem: (name: string, toArray = false, storage = localStorage) => {
          if (import.meta.client) {
            return toArray ? JSON.parse(storage.getItem(name)) : storage.getItem(name);
          }
        },
        setItem: (name: string, data: string, stringify = false, storage = localStorage) => {
          if (import.meta.client) {
            storage.setItem(name, stringify ? JSON.stringify(data) : data);
          }
        },
        removeItem: (name: string, storage = localStorage) => {
          if (import.meta.client) {
            storage.removeItem(name);
          }
        },
        clearItems: (storage = localStorage) => {
          if (import.meta.client && storage.length) {
            storage.clear();
          }
        },
      },
    },
  };
});
