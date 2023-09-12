TIETOKANTA

Tehty viikkoa 4 varten uusi tietokanta. Projektin nimi mongodb:ssä on viikko4. Klusterin nimi on BlogCluster ja itse tietokanta on test.blogs.

Tietokanta tuotannolle:     mongodb+srv://fullstack:<password>@blogcluster.ms7mcby.mongodb.net/test?retryWrites=true&w=majority
Tietokanta testeille:       mongodb+srv://fullstack:<password>@viikko4testcluster.qbxqas1.mongodb.net/?retryWrites=true&w=majority

MUUTA
Kun kaikki tehtävät valmistuivat 12.9.2023 ja automaattiset testit saatin korjattua niin koko projektin toimivuus testattiin vielä erikseen
postmanilla (blog/user/login -- get/put/post/delete) siltä osin miten kukin osa tuki eri operaatioita. KAIKKI KUNNOSSA!

    BLOG:   GET - OK, GET+ID - OK, PUT - OK, POST - OK, DELETE - OK
    USER:   GET - OK, POST - OK
    LOGIN:  GET - OK

    Testettu kaikki debug moodissa ja postmanilla.

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
4.3         - TEHTY
4.4         - TEHTY
4.5         - TEHTY
4.6         - TEHTY
4.7         - TEHTY
4.8         - TEHTY     - GET       - TOIMII OIKEIN.
4.9         - TEHTY     - GET       - TARKISTETTU ETTÄ PALAUTUVALLA OBJECTILLA ON ID KENTTÄ
4.10        - TEHTY     - POST      - TOIMII OIKEIN.
4.11        - TEHTY     - POST      - LUODAAN OLIO ILMAN 'LIKES' KENTTÄÄ JA TIETOKANTAAN MUODOSTUU OLIO JOLLA LIKES: 0.
4.12        - TEHTY     - POST      - ANTAA 400 KOODIN.
4.13        - TEHTY     - TOTEUTETTU KOHDASSA 4.2 JA TESTATTU
4.14        - TEHTY     - TOTEUTETTU KOHDASSA 4.2 JA TESTATTU
4.15        - TEHTY     - SALASANA PIILOTETTU HASH OMINAISUUDELLA
4.16        - TEHTY
4.17        - TEHTY     - TARKASTETTU MONGOSTA
4.18        - TEHTY     
4.19        - TEHTY     - TESTATTU POSTMANILLA - ILMAN TOKENIA AUTHORISATION KENTÄSSÄ LISÄYS EI ONNISTU
4.20        - TEHTY     - KÄYTÖSSÄ POST (UUSI) JA DELETE ROUTEISSA. TESTATTU POSTMANILLA.
4.21        - TEHTY
4.22        - TEHTY
4.23        - TEHTY     - KAIKKI TESTIT LÄPI: 5 / 5 ja 34 / 34 time 3.238
