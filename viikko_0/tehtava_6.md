sequenceDiagram
    participant browser
    participant server
    participant javascript
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: POST https://studies.cs.helsinki.fi//exampleapp/spa.js
    activate javascript
    javacript-->>browser: Lisää uuden noten ja päivittää listan.
    deactivate javascript
    
