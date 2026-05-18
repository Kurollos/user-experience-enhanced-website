
# Enhanced website
Ontwerp en maak een interactieve website die snel laadt en prettig te gebruiken is.

De instructie vind je in: [INSTRUCTIONS.md](https://github.com/fdnd-task/enhanced-website/blob/main/docs/INSTRUCTIONS.md)


## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
In dit project heb ik een bestaande website verbeterd en uitgebreid op basis van feedback van de opdrachtgever. 
De nadruk lag op het optimaliseren van de performance en het toevoegen van een interactieve wishlist functionaliteit. 
Ik heb verschillende technieken toegepast om layout shifts te voorkomen, laadtijden te verkorten en de gebruikerservaring vloeiender te maken. 
Daarnaast kunnen gebruikers nu cadeaus toevoegen aan hun favorieten via een like button, waarbij deze gegevens worden opgeslagen in een database en direct zichtbaar zijn in de interface.

## Post Interactie
<img width="959" height="476" alt="image" src="https://github.com/user-attachments/assets/b2cb7bab-9c70-4564-95f0-84d500d46b54" /> 
<img width="959" height="442" alt="image" src="https://github.com/user-attachments/assets/5cb70c3e-6443-40b9-850f-1b0f081f3693" />
<img width="958" height="476" alt="image" src="https://github.com/user-attachments/assets/d7e798e1-23d6-4205-a43f-4a1d294a0ded" />
<img width="959" height="472" alt="image" src="https://github.com/user-attachments/assets/4e8a01a1-9152-411b-99c4-42ba0b5a4bbb" />
<img width="959" height="440" alt="image" src="https://github.com/user-attachments/assets/06362e8f-6851-4742-b76c-da2ed16b9ad4" />
<img width="959" height="440" alt="image" src="https://github.com/user-attachments/assets/2640346f-be24-4151-ad91-213fbeca1d88" />

## Filter Interactie
<img width="956" height="475" alt="image" src="https://github.com/user-attachments/assets/9c0ebaa5-f50a-4f69-9d7d-e942d8105930" />



## Gebruik
De website maakt het mogelijk voor gebruikers om door cadeaus te browsen en deze eenvoudig toe te voegen aan hun wishlist via een like button. 
Tijdens deze interactie krijgt de gebruiker direct feedback in de vorm van een loading, success of error state. 
Ook worden de favorieten direct bijgewerkt zonder dat de pagina opnieuw geladen hoeft te worden, wat zorgt voor een soepele gebruikerservaring.

https://github.com/Kurollos/user-experience-enhanced-website/blob/4c951aa2c23d361438b54f52904635a2213cae0e/views/index.liquid#L80-L88

## Kenmerken
De website bevat verschillende verbeteringen en functionaliteiten. Zo worden layout shifts voorkomen door het gebruik van vaste afmetingen voor afbeeldingen en componenten. De performance is verbeterd door technieken zoals lazy loading en responsive images met srcset. Daarnaast is er een interactieve wishlist functionaliteit toegevoegd die werkt met POST requests en gekoppeld is aan een database. Door het gebruik van JavaScript en fetch worden updates direct in de interface zichtbaar gemaakt. Tot slot zorgen duidelijke UI states ervoor dat de gebruiker altijd begrijpt wat er gebeurt tijdens een interactie.

https://github.com/Kurollos/user-experience-enhanced-website/blob/fb8547c3456f9c0f287a71650d691e2cd6515fca/assets/script.js#L13-L24

## Installatie
Om het project lokaal te gebruiken, moet eerst de repository worden gekloond. Vervolgens kan naar de juiste map worden genavigeerd en kunnen de benodigde dependencies worden geïnstalleerd. Daarna kan de server worden gestart, waarna de website lokaal te bekijken is.

git clone [repo-link]
cd [projectnaam]
npm install
npm start

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
