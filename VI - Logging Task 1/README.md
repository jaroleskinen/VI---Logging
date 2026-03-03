# VI Logging

## Task 1 - Implement Logging library

Tässä tehtävässä lisäsin lokituksen Node.js -sovellukseen käyttäen Winston-kirjastoa.  
Testasin, miten eri tasoiset lokiviestit (info, warn, error) voidaan:

- tulostaa konsoliin
- tallentaa tiedostoihin
- erotella virheet omaan lokiin

Lokit tallennetaan JSON-muodossa ja niihin lisätään automaattisesti aikaleima.

---

## Käytetty ympäristö

- Node.js: v24.13.0
- npm: 11.6.2
- winston: 3.11.0
- jest

---

## Asennus

1. Kloonaa repository omalle koneelle
2. Siirry projektikansioon
3. Asenna riippuvuudet:

```bash
npm install
npm start
```

---

## Testitulokset

Ajoin testit pariin kertaan komennolla `npm test` ja ne menivät läpi ilman virheitä.

Lokitiedostot syntyvät oikein:

- combined.log sisältää kaikki lokitasot
- error.log sisältää vain error-viestit
