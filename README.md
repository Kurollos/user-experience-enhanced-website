
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

## Gebruik
De website maakt het mogelijk voor gebruikers om door cadeaus te browsen en deze eenvoudig toe te voegen aan hun wishlist via een like button. 
Tijdens deze interactie krijgt de gebruiker direct feedback in de vorm van een loading, success of error state. 
Ook worden de favorieten direct bijgewerkt zonder dat de pagina opnieuw geladen hoeft te worden, wat zorgt voor een soepele gebruikerservaring.

## Kenmerken
De website bevat verschillende verbeteringen en functionaliteiten. Zo worden layout shifts voorkomen door het gebruik van vaste afmetingen voor afbeeldingen en componenten. De performance is verbeterd door technieken zoals lazy loading en responsive images met srcset. Daarnaast is er een interactieve wishlist functionaliteit toegevoegd die werkt met POST requests en gekoppeld is aan een database. Door het gebruik van JavaScript en fetch worden updates direct in de interface zichtbaar gemaakt. Tot slot zorgen duidelijke UI states ervoor dat de gebruiker altijd begrijpt wat er gebeurt tijdens een interactie.

## Installatie
Om het project lokaal te gebruiken, moet eerst de repository worden gekloond. Vervolgens kan naar de juiste map worden genavigeerd en kunnen de benodigde dependencies worden geïnstalleerd. Daarna kan de server worden gestart, waarna de website lokaal te bekijken is.

git clone [repo-link]
cd [projectnaam]
npm install
npm start

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).
