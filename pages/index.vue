 <script setup lang="ts">
definePageMeta({
  title: 'Startseite',
  name: 'home',
  path: '/'
})

const router = useRouter()

function redirectToGames() {
  router.push({ name: 'games' })
}
</script>

<template>
  <div>
    <section class="section is-medium has-text-centered">
      <h1 class="title">Willkommen!</h1>
      <h2 class="subtitle">Entdecke die Welt der Brettspiele und finde dein neues Lieblingsspiel.</h2>
      <ui-button
          text="Jetzt dein nächstes Brettspiel entdecken"
          layout="is-light is-danger"
          @click="redirectToGames"
      />
    </section>

    <p class="title has-text-centered">Du kennst mich vielleicht aus ...</p>
    <p class="content has-text-centered is-size-1">
      <span class="mr-5"><font-awesome-icon icon="fa-brands fa-instagram" /></span>
      <span><font-awesome-icon icon="fa-brands fa-threads" /></span>
    </p>

    <section class="hero is-light is-halfheight">
      <div class="hero-body">
        <div>
          <p class="title">Ich bin Alex,</p>
          <p class="content">37 Jahre alt und arbeite als Webentwickler.</p>
          <p class="content">
            Um meinen Kopf freizubekommen, habe ich schon immer gerne Brettspiele gespielt – mal mehr,
            mal weniger.
          </p>

          <p class="content">
            Seit 2023 ist das analoge Spielen am Wochenende zu einem richtigen gemeinsamen Hobby mit
            meinen Freunden geworden.
          </p>

          <p class="content">
            Fun Fact: Viele meiner Hobbys fangen mit „B“ an: Brettspiele, Bücher lesen und Bloggen. 😊
          </p>

          <p class="content">
            Ich freue mich riesig darauf, euch für die Welt der Brettspiele zu begeistern und hoffe,
            euch ein paar coole Spiele zeigen zu können.
          </p>

          <p class="content">
            Über ein Abo und euer Feedback auf Instagram oder Threads würde ich mich sehr freuen!
          </p>

          <p class="content">Euer Freund, Alex</p>
        </div>
      </div>
    </section>

    <p class="title has-text-centered mt-5">Werde Teil meiner Community, wenn …</p>
    <p class="content has-text-centered">… du genauso viel Liebe für Brettspiele hast wie ich</p>
    <p class="content has-text-centered">… du spannende Herausforderungen suchst</p>
    <p class="content has-text-centered">
      … deine wertvolle Zeit in wirklich gute Brettspiele investieren möchtest
    </p>

    <p class="content has-text-centered">Viel Spaß beim Stöbern!</p>
  </div>
</template>
