<script setup lang="ts">
useSeoMeta({
  title: 'Impressum',
});

const runtimeConfig = useRuntimeConfig();

const formattedAddress = runtimeConfig.public.address.split(',').join('<br />');
</script>

<template>
  <layout-content>
    <h1>Impressum</h1>

    <h3>Angaben gemäß § 5 TMG (Telemediengesetz)</h3>

    <p>
      Name des Anbieters und Redaktionell verantwortlich<br />
      Betreiber der Instagram- und Threads-Accounts {{ runtimeConfig.public.instagram }}
    </p>

    <p>Adresse:</p>

    <p v-html="formattedAddress"></p>

    <p>Kontakt:</p>

    <p>E-Mail: {{ runtimeConfig.public.email }}</p>

    <h3>Haftungsausschluss (Disclaimer)</h3>

    <p>
      Alle Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Dennoch kann keine
      Garantie für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte übernommen werden.
      Haftungsansprüche gegen den Betreiber der Website, die sich auf Schäden materieller oder
      ideeller Art beziehen, die durch die Nutzung der dargebotenen Informationen verursacht wurden,
      sind grundsätzlich ausgeschlossen, sofern seitens des Betreibers kein nachweislich
      vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
    </p>

    <h3>Haftung für Links:</h3>

    <p>
      Diese Website enthält Links zu externen Webseiten Dritter, auf deren Inhalte der Betreiber
      dieser Seite keinen Einfluss hat. Deshalb kann keine Haftung für diese fremden Inhalte
      übernommen werden. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
      Betreiber der Seiten verantwortlich.
    </p>

    <h3>Urheberrecht</h3>

    <p>
      Die durch den Betreiber der Website erstellten Inhalte und Werke auf diesen Seiten unterliegen
      dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
      Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des
      jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser Seite nicht vom Betreiber
      erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
      Dritter als solche gekennzeichnet.
    </p>
  </layout-content>
</template>
