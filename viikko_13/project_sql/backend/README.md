# Backend viikko 13

Sisältää viimeisen "viikon" 13 tehtävät.

*** Tehtävät ***

13.1    - OK\
13.2    - OK\
13.3    - OK\
13.4    - OK\
13.5    - OK\
13.6    - OK\
13.7    - OK\
13.8    - OK\
13.9    - OK\
13.10   - OK\
13.11   - OK\
13.12   - OK\
13.13   - OK\
13.14   - OK\
13.15   - OK\
13.16   - OK\
13.17   - OK\
13.18   - OK\
13.19   - OK\
13.20   - OK\
13.21   - OK\
13.22   - OK\
13.23   - OK\
13.24   - OK

*** Tietokanta ***

Harjoitusten tietokanta toteuttiin docker ratkaisulla.

*** Testaus ***

Viimeinen tehtävä testattu postmanilla:\
BLOG:\
Put:    Ei onnistu vanhalla tai väärällä tokenilla. Ei onnistu jos ei ole kirjautunut sisään.\
Delete: Ei onnistu vanhalla tai väärällä tokenilla. Ei onnistu jos ei ole kirjautunut sisään.\
Post:   Ei onnistu vanhalla tai väärällä tokenilla. Ei onnistu jos ei ole kirjautunut sisään.\
USERS:\
Put:    Ei onnistu vanhalla tai väärällä tokenilla. Ei onnistu jos ei ole kirjautunut sisään.\
Logout toimii. Poistaa session.

*** Asennukset ***

npm install jsonwebtoken\
npm install umzug