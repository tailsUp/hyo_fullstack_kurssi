## Tehtävä 6

Tehtävä 6 kuvaa miten tieto liikkuu single app sovelluksessa kun listalle lisätään uusi String elementti. Sivu ei lataudu uudelleen
kuten perinteisissä versioissa. Sen sijaan javascript päivittää listan ja lataa sen uudelleen.

```mermaid
sequenceDiagram
    participant browser
    participant server
    participant javascript
    participant user
    browser ->>server: GET https://studies.cs.helsinki.fi/exampleapp/notes
    server ->>browser: HTML tiedosto.
    browser ->>server: GET GET https://studies.cs.helsinki.fi/exampleapp/main.css
    server ->>browser: CSS tiedosto.
    browser ->>server: GET hGET https://studies.cs.helsinki.fi/exampleapp/main.js
    server ->>browser: JavaScript tiedosto.
    user ->>browser: Tekee uuden String muuttujan ja painaa lisää.
    browser->>Javascript: new_note_spa
    javacript-->>browser: Lisää uuden noten ja päivittää listan.
```
