PROJEKTISSA AJETUT ASENNUKSET

    - npm init .
    - npm install express
    - npm install --save-dev nodemon
    - npm install cors
    - npm install mongoose

TIETOKANTA

Tehty viikkoa 4 varten uusi tietokanta. Projektin nimi mongodb:ssä on viikko4. Klusterin nimi on BlogCluster ja itse tietokanta on test.blogs.

TEHTÄVÄT

4.1         - TEHTY     - TESTAUS POSTMAN: get ja post OK.
4.2         - TEHTY     - TESTATTU GET, GET ID, POST (body RAW ja JSON), PUT (body RAW ja JSON) ja DELETE.
                        - GET       - http://localhost:3003/api/blogs
                        - GET ID    - http://localhost:3003/api/blogs/ID_TÄSSÄ
                        - POST      - http://localhost:3003/api/blogs --> {"title": "Test Title 333", "author": "Test Author 333", "url": 
                                      "www.testi.fi/testi/testi/333", "likes": 333} --> JSON
                        - PUT       - http://localhost:3003/api/blogs/ID_TÄSSÄ --> {"title": "Test Title 333-333", "author": "Test Author 333-333",
                                      "url": "www.testi.fi/testi/testi/333", "likes": 3} --> JSON
                        - DEL       - http://localhost:3003/api/blogs/ID_TÄSSÄ