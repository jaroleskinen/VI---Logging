# VI - Logging

## Task 2 - Tally counter REST API

Toisessa tehtävässä tein simppelin REST API:n Expressillä.  
API toimii laskurina (counter), joka pitää muistissa kokonaislukuarvoa.

API tukee seuraavia toimintoja:

- Lukee nykyisen arvon
- Kasvattaa arvoa yhdellä
- Nollaa arvon

Lisäksi sovellukseen on lisätty Winston-lokitus kuten Task 1:ssä.

---

## Käytetty ympäristö

- Node.js: 18.x
- Express: 4.18.2
- Winston: 3.11.0

---

## Asennus

1. Kloonaa repository
2. Siirry projektikansioon
3. Asenna riippuvuudet:

```bash
npm install
npm start
```

---

## Testitulokset

API testattiin selaimella sekä rest.http -tiedoston kautta. Tässäkään tehtävässä ei ilmennyt virheitä.

Testatut tapaukset:

- /counter-read palauttaa oikean arvon
- /counter-increase kasvattaa arvoa yhdellä
- useampi increase kasvattaa arvoa oikein
- /counter-reset palauttaa arvon nollaan
- serverin uudelleenkäynnistyksen jälkeen arvo palautuu nollaan
