<script setup lang="ts">
useSeoMeta({
  title: 'Über mich',
  description: 'Hallo, ich bin Alex, ein begeisterter Brettspielspieler.',
});
</script>

<template>
  <div>
    <layout-hero>
      <template #title>#Brettspiele</template>
      <template #subtitle>
        Eine Investition in Brettspiele bringt die größten Renditen – Spaß, Gemeinschaft und
        unvergessliche Momente!
      </template>
    </layout-hero>

    <layout-box>
      <template #title> Hallo, ich bin Alex, </template>
      <template #default>
        <p>ein begeisterter Brettspielspieler und Sammler mit einer klaren Mission:</p>
        <p>
          Ich möchte so viele Frauen und Männer wie möglich dazu inspirieren, die Freude am
          Brettspielen für sich zu entdecken!
        </p>
      </template>
    </layout-box>

    <layout-section>
      <template #title>Meine Lieblingsdinge ...</template>
      <template #default>
        <div class="about__list">
          <div>
            <div class="about__list-icon"><u-icon name="fa6-solid:users" /></div>
            Spielabende mit Freunden: Gemeinsam lachen, spielen und unvergessliche Momente schaffen.
          </div>
          <div>
            <div class="about__list-icon"><u-icon name="fa6-solid:chess" /></div>
            Brettspiele spielen – eintauchen, strategieren und gemeinsam Spaß haben!
          </div>
          <div>
            <div class="about__list-icon"><u-icon name="fa6-solid:magnifying-glass" /></div>
            Neue Brettspiele entdecken – die perfekte Gelegenheit, den Spielehorizont zu erweitern!
          </div>
          <div>
            <div class="about__list-icon"><u-icon name="fa6-solid:pizza-slice" /></div>
            Pizza essen – der perfekte Begleiter für einen Spieleabend!
          </div>
          <div>
            <div class="about__list-icon"><u-icon name="fa6-solid:beer-mug-empty" /></div>
            Pepsi trinken – der erfrischende Genuss für jeden Moment!
          </div>
          <div>
            <div class="about__list-icon"><u-icon name="fa6-solid:plane" /></div>
            Die Welt bereisen – der Schlüssel zu einzigartigen Erfahrungen und Erinnerungen.
          </div>
        </div>
      </template>
    </layout-section>

    <layout-section>
      <template #title>Meine Lieblingsspiele ...</template>
      <template #default>
        <p>Meine Lieblingsspiele ...</p>
        <p>… Cashflow</p>
        <p>… Zug um Zug</p>
        <p>… Monopoly</p>
        <p>… UNO Party</p>
      </template>
    </layout-section>

    <layout-hero>
      <template #title>#Support </template>
      <template #subtitle>
        Unterstütze mich auf Ko-fi oder folge mir auf Instagram und Threads – und wenn dir meine
        Inhalte gefallen, empfiehl mich gerne weiter. Ich würde mich sehr freuen!
      </template>
    </layout-hero>
  </div>
</template>

<style scoped lang="css">
.about__list {
  display: grid;
  gap: var(--size-24);
  padding-top: var(--size-32);
  padding-bottom: var(--size-32);
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

@media (min-width: 640px) {
  .about__list {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.about__list-icon {
  font-size: var(--font-size-48);
  line-height: var(--size-48);
  padding-bottom: var(--size-16);
  color: var(--color-aqua);
}
</style>
