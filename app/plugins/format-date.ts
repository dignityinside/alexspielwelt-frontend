export default defineNuxtPlugin((nuxtApp) => {
  function formatDate(date: string, short: boolean = false): string {
    const parsedDate = new Date(date);

    let options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };

    if (short) {
      options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      };
    }

    return parsedDate.toLocaleDateString('de-DE', {
      ...options,
      timeZone: 'UTC',
    });
  }

  nuxtApp.provide('formatDate', formatDate);
});
