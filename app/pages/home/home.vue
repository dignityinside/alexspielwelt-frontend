<script setup lang="ts">
useSeoMeta({
  title: 'Alex Spielwelt',
  description: 'Spiel-Empfehlungen & Einblicke.',
});

function redirectToGames() {
  navigateTo({ name: 'games' });
}
</script>

<template>
  <div>
    <layout-hero>
      <template #title> Willkommen! </template>
      <template #subtitle>
        Entdecke die Welt der Brettspiele und finde dein neues Lieblingsspiel.
      </template>
      <template #default>
        <u-button @click="redirectToGames" size="lg">
          Jetzt dein nächstes Brettspiel entdecken
        </u-button>
      </template>
    </layout-hero>

    <layout-section>
      <template #title> Du kennst mich vielleicht aus ... </template>
      <template #icons>
        <span class="mr-5">
          <u-icon name="simple-icons:instagram" />
        </span>
        <span>
          <u-icon name="simple-icons:threads" />
        </span>
      </template>
    </layout-section>

    <layout-box>
      <template #title> Ich bin Alex, </template>
      <template #default>
        <p>37 Jahre alt und arbeite als Webentwickler.</p>
        <p>
          Um meinen Kopf freizubekommen, habe ich schon immer gerne Brettspiele gespielt – mal mehr,
          mal weniger.
        </p>
        <p>
          Seit 2023 ist das analoge Spielen am Wochenende zu einem richtigen gemeinsamen Hobby mit
          meinen Freunden geworden.
        </p>
        <p>
          Fun Fact: Viele meiner Hobbys fangen mit „B“ an: Brettspiele, Bücher lesen und Bloggen. 😊
        </p>
        <p>
          Ich freue mich riesig darauf, euch für die Welt der Brettspiele zu begeistern und hoffe,
          euch ein paar coole Spiele zeigen zu können.
        </p>
        <p>Über ein Abo und euer Feedback auf Instagram oder Threads würde ich mich sehr freuen!</p>
        <p>Euer Freund, Alex</p>
      </template>
    </layout-box>

    <layout-section>
      <template #title> Werde Teil meiner Community, wenn … </template>
      <template #default>
        <p>… du genauso viel Liebe für Brettspiele hast wie ich</p>
        <p>… du spannende Herausforderungen suchst</p>
        <p>… deine wertvolle Zeit in wirklich gute Brettspiele investieren möchtest</p>
        <p>Viel Spaß beim Stöbern!</p>
      </template>
    </layout-section>
  </div>
</template>
