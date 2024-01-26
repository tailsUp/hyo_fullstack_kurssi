*** VIIKKO 8 ***

Tässä projektissa viikon 8 tehtävät 8.1 - 8.7\

*** ASENNUKSET ***

npm init\
npm install @apollo/server graphql\
npm install --save-dev nodemon\
npm install uuid\
npm install mongodb@4.1\
npm install jsonwebtoken\
npm install dotenv\
npm install mongoose@7.0.0\

*** Tehtävät ***

8.1     - OK\
8.2     - OK\
8.3     - OK --> allAuthors2\
8.4     - OK --> allBooks2\
8.5     - OK --> allBooks2\
8.6     - OK\
8.7     - OK\

*** Apollon vastaukset per tehtävä ***

8.1\
\
{\
  "data": {\
    "authorCount": 5,\
    "bookCount": 7\
  }\
}\
\
8.2\
\
{\
    "title": "Agile software development",\
    "author": "Robert Martin",\
    "id": "afa5b6f5-344d-11e9-a414-719c6709cf3e",\
    "genres": [\
        "agile",\
        "patterns",\
        "design"\
    ]\
}\
\
8.3\
\
{\
  "data": {\
    "allAuthors2": [\
      {\
        "name": "Robert Martin",\
        "bookCount": 2\
      },\
      ...\
    ]\
  }\
}\
\
8.4\
\
{\
  "data": {\
    "allBooks2": [\
      {\
        "title": "Clean Code",\
        "author": "Robert Martin"\
      },\
      {\
        "title": "Refactoring, edition 2",\
        "author": "Martin Fowler"\
      }\
    ]\
  }\
}\
\
8.5\
\
{\
  "data": {\
    "allBooks2": [\
      {\
        "title": "Clean Code",\
        "author": "Robert Martin"\
      },\
      {\
        "title": "Refactoring, edition 2",\
        "author": "Martin Fowler"\
      },\
      ...\
    ]\
  }\
}\
\
8.6\
\
{\
  "data": {\
    "allAuthors2": [\
      {\
        "bookCount": 2,\
        "name": "Robert Martin"\
      },\
      ...\
      {\
        "bookCount": 1,\
        "name": "Reijo Mäki"\
      }\
    ]\
  }\
}\
\
8.7\
\
{\
  "data": {\
    "addBook": {\
      "title": "Pimeyden tango",\
      "author": "Reijo Mäki"\
    },\
    "editAuthor": {\
      "name": "Reijo Mäki",\
      "born": 1958\
    }\
  }\
}\
\