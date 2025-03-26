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
        <div @click="redirectToGames" class="home__games-button">
          Jetzt dein nächstes Brettspiel entdecken
        </div>
      </template>
    </layout-hero>

    <layout-section>
      <template #title> Du kennst mich vielleicht aus ... </template>
      <template #icons>
        <div class="home__social-icons">
          <div>
            <u-icon name="simple-icons:instagram" />
          </div>
          <div>
            <u-icon name="simple-icons:threads" />
          </div>
        </div>
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

<style scoped lang="css">
.home__games-button {
  color: var(--color-aqua);
  border-radius: 10px;
  border: solid 2px var(--color-aqua);
  padding: var(--size-8) var(--size-32);
  cursor: pointer;
  text-align: center;
  transition: 0.3s;

  &:hover {
    color: var(--color-white);
    border: solid 2px var(--color-white);
  }
}

.home__social-icons {
  display: flex;
  justify-content: center;
  gap: var(--size-24);
}
</style>
