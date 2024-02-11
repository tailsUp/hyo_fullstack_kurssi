*** HARJOITUKSET 9.1 - 9.7 ***

9.1     - OK.
9.2     - OK.
9.3     - OK.
9.4     - OK.
9.5     - OK.
9.6     - OK.
9.7     - OK ( tehty toteus ILMAN express.json() komentoa. Ihan älytöntä jättää sen käyttö vaatimus viimeiseksi lauseeksi...).

*** Miten ajan ***

1. Aja tietyn tiedoston koko sisältö: npm run ts-node index.ts -- -s --someoption
2. Käytä scriptejä.

*** Työtila asennukset ***

1. npm init
2. npm install --save-dev ts-node typescript

3. npm install express
4. npm install --save-dev @types/express
5. npm install --save-dev ts-node-dev (tarkoitettu vain develop ympäristön käyttöön --> vrt nodemon)
6. npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parsernpm run lint

*** Lisätyt scriptit ***

1. "ts-node": "ts-node"
2. "start": "ts-node index.ts",
3. "dev": "ts-node-dev index.ts"


*** Muuta ***

1. Lisätty tsconfig.json tiedosto ja sen sisältö.
