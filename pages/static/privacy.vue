<script setup lang="ts">
useSeoMeta({
  title: 'Datenschutzerklärung',
});

const runtimeConfig = useRuntimeConfig();
const formattedAddress = runtimeConfig.public.address.split(',').join('<br />');
</script>

<template>
  <div>
    <h1 class="title">Datenschutzerklärung</h1>

    <h3 class="subtitle mt-4">1. Allgemeine Informationen</h3>
    <p class="content">
      Ich freue mich über dein Interesse an meiner Website. Der Schutz deiner personenbezogenen
      Daten ist mir sehr wichtig. An dieser Stelle möchte ich dich darüber informieren, welche Daten
      während deines Besuchs auf meiner Website erhoben werden, wie sie verwendet werden und welche
      Rechte du in Bezug auf deine Daten hast.
    </p>

    <h2 class="subtitle">2. Verantwortlicher für die Datenverarbeitung</h2>
    <p class="content">Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>

    <p class="content" v-html="formattedAddress"></p>

    <p class="content">{{ runtimeConfig.public.email }}</p>

    <h3 class="subtitle">3. Erhebung und Speicherung personenbezogener Daten</h3>
    <p class="content">
      Ich erhebe personenbezogene Daten, wenn du mir diese im Rahmen einer Kontaktaufnahme (z. B.
      per E-Mail oder Kontaktformular) mitteilst oder wenn du bestimmte Funktionen meiner Website
      nutzt.
    </p>

    <div class="content">
      <p>Die personenbezogenen Daten, die ich verarbeiten kann, umfassen unter anderem:</p>
      <ul>
        <li>Name</li>
        <li>E-Mail-Adresse</li>
        <li>IP-Adresse</li>
        <li>Nutzungsdaten (z. B. Besuchshäufigkeit, Interaktionen auf der Website)</li>
      </ul>
    </div>

    <h3 class="subtitle">4. Zweck der Datenverarbeitung</h3>
    <div class="content">
      <p>Ich verwende deine personenbezogenen Daten für folgende Zwecke:</p>
      <ul>
        <li>Beantwortung von Anfragen</li>
        <li>Bereitstellung von Informationen</li>
        <li>Verbesserung meiner Website und der Nutzererfahrung</li>
        <li>Erfüllung rechtlicher Verpflichtungen</li>
      </ul>
    </div>

    <h3 class="subtitle">5. Rechtsgrundlage der Verarbeitung</h3>
    <div class="content">
      <p>
        Die Verarbeitung deiner personenbezogenen Daten erfolgt auf Grundlage der folgenden
        Rechtsgrundlagen der DSGVO:
      </p>
      <ul>
        <li>Einwilligung (Artikel 6 Abs. 1 lit. a DSGVO).</li>
        <li>
          Berechtigte Interessen (Artikel 6 Abs. 1 lit. f DSGVO) – z. B. zur Verbesserung meiner
          Website.
        </li>
      </ul>
    </div>

    <h3 class="subtitle">6. Weitergabe von Daten</h3>
    <div class="content">
      <p>Ich gebe deine personenbezogenen Daten nur dann an Dritte weiter, wenn:</p>
      <ul>
        <li>Du ausdrücklich eingewilligt hast,</li>
        <li>Eine rechtliche Verpflichtung besteht</li>
      </ul>
    </div>

    <h3 class="subtitle">
      7. Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung
      (Art. 21 DSGVO)
    </h3>
    <p class="content">
      Du hast das Recht, jederzeit gegen die Verarbeitung deiner personenbezogenen Daten Widerspruch
      einzulegen, wenn diese auf Grundlage von Art. 6 Abs. 1 lit. e (öffentliche Aufgabe) oder lit.
      f (berechtigtes Interesse) DSGVO erfolgt. Das gilt auch für Profiling, das auf dieser
      Grundlage durchgeführt wird. Wenn du Widerspruch einlegst, verarbeite ich deine
      personenbezogenen Daten nicht mehr, es sei denn, ich kann zwingende schutzwürdige Gründe für
      die Verarbeitung nachweisen, die deine Interessen, Rechte und Freiheiten überwiegen oder die
      Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Wenn
      deine personenbezogenen Daten für Direktwerbung verarbeitet werden, hast du das Recht,
      jederzeit Widerspruch gegen die Verarbeitung deiner personenbezogenen Daten zum Zwecke der
      Werbung einzulegen. Das gilt auch für das Profiling, soweit es mit dieser Direktwerbung in
      Verbindung steht. Wenn du von deinem Widerspruchsrecht Gebrauch machst, werden deine
      personenbezogenen Daten nicht mehr für Direktwerbung verwendet.
    </p>

    <h3 class="subtitle">8. Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
    <p class="content">
      Du hast das Recht, eine Beschwerde bei der zuständigen Aufsichtsbehörde einzureichen, wenn du
      der Ansicht bist, dass die Verarbeitung deiner personenbezogenen Daten gegen die
      Datenschutz-Grundverordnung (DSGVO) verstößt.
    </p>

    <h3 class="subtitle">9. Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
    <p class="content">
      Du hast das Recht, deine personenbezogenen Daten, die du uns bereitgestellt hast, in einem
      strukturierten, gängigen und maschinenlesbaren Format zu erhalten. Du kannst diese Daten
      entweder für deine eigenen Zwecke verwenden oder an einen anderen Verantwortlichen
      übermitteln, sofern dies technisch möglich ist. Das Recht auf Datenübertragbarkeit gilt nur
      für Daten, die ich auf Grundlage deiner Einwilligung oder zur Erfüllung eines Vertrages
      verarbeiten (Artikel 6 Abs. 1 lit. a und b DSGVO).
    </p>

    <h3 class="subtitle">10. Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
    <div class="content">
      <p>
        Du hast das Recht, die Verarbeitung deiner personenbezogenen Daten unter bestimmten
        Umständen einzuschränken. Dies gilt, wenn:
      </p>
      <ul>
        <li>
          Du die Richtigkeit deiner personenbezogenen Daten bestreitest und ich die Richtigkeit der
          Daten überprüfe.
        </li>
        <li>
          die Verarbeitung unrechtmäßig ist und du die Löschung der Daten ablehnst und stattdessen
          die Einschränkung der Nutzung verlangst,
        </li>
        <li>
          ich die Daten für die Zwecke der Verarbeitung nicht mehr benötigen, du diese aber zur
          Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen benötigst,
        </li>
        <li>
          du Widerspruch gegen die Verarbeitung eingelegt hast und noch nicht feststeht, ob die
          berechtigten Gründe des Verantwortlichen gegenüber deinen Interessen überwiegen.
        </li>
      </ul>
      <p>
        Wenn die Verarbeitung eingeschränkt wird, dürfen die Daten nur noch mit deiner Zustimmung
        oder aus bestimmten Gründen (z. B. zur Geltendmachung von Rechtsansprüchen) verarbeitet
        werden.
      </p>
    </div>

    <h3 class="subtitle">11. Verwendung von Cookies</h3>
    <p class="content">
      Meine Website verwendet Cookies, um die Benutzererfahrung zu verbessern. Cookies sind kleine
      Textdateien, die auf deinem Endgerät gespeichert werden, wenn du meine Website besuchst. Sie
      ermöglichen es uns, die Nutzung der Website zu analysieren, bestimmte Funktionen anzubieten
      und die Benutzererfahrung zu personalisieren.
    </p>
    <p class="content">
      Du kannst die Verwendung von Cookies in den Einstellungen deines Browsers anpassen. Beachte
      jedoch, dass bei der Deaktivierung von Cookies die Funktionalität meiner Website eingeschränkt
      sein könnte.
    </p>

    <h3 class="subtitle">12. Verwendung von Google Analytics</h3>
    <p class="content">
      Diese Website verwendet Google Analytics, einen Webanalysedienst von Google Inc. („Google“).
      Google Analytics verwendet Cookies, um eine Analyse der Benutzung der Website durch dich zu
      ermöglichen. Die durch das Cookie erzeugten Informationen über deine Benutzung dieser Website
      werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
    </p>
    <p class="content">
      Du kannst die Erfassung durch Google Analytics verhindern, indem du ein Browser-Add-on zur
      Deaktivierung von Google Analytics installierst oder Cookies in deinem Browser blockierst.
    </p>

    <h3 class="subtitle">13. Verwendung von Font Awesome</h3>
    <p class="content">
      Auf meiner Website verwende ich Font Awesome, ein Webfont-Dienst, der von Fonticons, Inc. zur
      Verfügung gestellt wird. Font Awesome ermöglicht es uns, Symbole und Icons in hoher Qualität
      auf meiner Website darzustellen. Um die Symbole von Font Awesome korrekt anzuzeigen, wird eine
      Verbindung zu den Servern von Fonticons, Inc. hergestellt. Dabei können Daten wie deine
      IP-Adresse und die aufgerufene URL an Fonticons, Inc. übermittelt werden. Dies ist
      erforderlich, damit die Icons von Font Awesome korrekt geladen und auf deiner Website
      angezeigt werden können. Die Nutzung von Font Awesome erfolgt auf Grundlage meines
      berechtigten Interesses an einer ansprechenden Gestaltung meiner Website (Artikel 6 Abs. 1
      lit. f DSGVO). Weitere Informationen zur Datennutzung und zum Datenschutz von Fonticons, Inc.
      findest du in deren Datenschutzrichtlinie:
      <a href="https://fontawesome.com/privacy" rel="nofollow">https://fontawesome.com/privacy</a>
    </p>

    <h3 class="subtitle">14. Verwendung von Hetzner Servern</h3>
    <p class="content">
      Meine Website wird auf Servern von Hetzner Online GmbH (Hetzner) gehostet. Hetzner ist ein
      deutscher Hosting-Anbieter, der meine Webanwendung und Datenbanken verwaltet. Im Rahmen des
      Hostings werden deine IP-Adresse sowie die durch den Besuch meiner Website entstehenden
      technischen Daten an Hetzner übermittelt. Die Datenverarbeitung auf den Servern von Hetzner
      erfolgt auf Grundlage meines berechtigten Interesses an der Bereitstellung und dem Betrieb
      einer stabilen und sicheren Website (Artikel 6 Abs. 1 lit. f DSGVO). Hetzner Online GmbH hat
      ihren Sitz in Deutschland, sodass die Datenverarbeitung gemäß den geltenden deutschen
      Datenschutzgesetzen erfolgt. Für weitere Informationen über den Umgang von Hetzner mit deinen
      Daten und deren Datenschutzpraktiken kannst du die Datenschutzrichtlinie von Hetzner einsehen:
      <a href="https://www.hetzner.com/de/privacy" rel="nofollow"
        >https://www.hetzner.com/de/privacy</a
      >
    </p>

    <h3 class="subtitle">15. SSL- bzw. TLS-Verschlüsselung</h3>
    <p class="content">
      Diese Website nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
      Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die du an uns als Seitenbetreiber
      sendest, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennst du daran,
      dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem
      Schloss-Symbol in deiner Browserzeile.
    </p>

    <h3 class="subtitle">16. Affiliate-Programme</h3>
    <p class="content">
      Diese Website nimmt am Partnerprogramm von Amazon EU teil. Das bedeutet, dass ich als Partner
      von Amazon eine Provision für Käufe erhalten können, die über die Links auf dieser Website
      getätigt werden. Wenn du über einen meiner Affiliate-Links auf Amazon einkaufst, erhalte ich
      eine kleine Provision, ohne dass dir dadurch zusätzliche Kosten entstehen. Amazon und das
      Amazon-Logo sind Warenzeichen von Amazon.com, Inc. oder seiner Tochtergesellschaften.
    </p>
    <p class="content">Was sind Affiliate-Links?</p>
    <p class="content">
      Affiliate-Links sind spezielle Links, die es uns ermöglichen, für Käufe, die über diese Links
      auf den Partnerseiten (wie Amazon) getätigt werden, eine Provision zu erhalten. Die
      Partnerprogramme ermöglichen es uns, durch Empfehlungen von Produkten Einnahmen zu erzielen,
      ohne dass dir als Käufer zusätzliche Kosten entstehen.
    </p>
    <p class="content">Transparenz und Datenschutz:</p>
    <p class="content">
      Ich lege großen Wert auf Transparenz und den Schutz deiner Daten. Die Teilnahme am Amazon
      Partnerprogramm hat keinen Einfluss auf den Preis der Produkte, die du über diese Links
      kaufst. Deine Daten werden gemäß den Datenschutzbestimmungen des jeweiligen Anbieters
      verarbeitet.
    </p>
    <p class="content">
      Amazon.de Datenschutzerklärung:
      <a href="https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010" rel="nofollow"
        >https://www.amazon.de/gp/help/customer/display.html?nodeId=201909010</a
      >
    </p>

    <h3 class="subtitle">17. Änderungen der Datenschutzerklärung</h3>
    <p class="content">
      Ich behalte mir vor, diese Datenschutzerklärung bei Bedarf zu ändern, insbesondere bei
      Anpassungen der rechtlichen Anforderungen. Die jeweils aktuelle Version findest du auf meiner
      Website.
    </p>

    <h3 class="subtitle">18. Kontakt</h3>
    <p class="content">
      Für Fragen zum Datenschutz oder zur Ausübung deiner Rechte kannst du uns jederzeit unter der
      oben angegebenen Adresse kontaktieren.
    </p>
  </div>
</template>

<style scoped></style>
