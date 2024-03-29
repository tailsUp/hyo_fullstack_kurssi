const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { v1: uuid } = require('uuid')
const { GraphQLError } = require('graphql')

let authors = [
  {
    name: 'Robert Martin',
    id: "afa51ab0-344d-11e9-a414-719c6709cf3e",
    born: 1952,
  },
  {
    name: 'Martin Fowler',
    id: "afa5b6f0-344d-11e9-a414-719c6709cf3e",
    born: 1963
  },
  {
    name: 'Fyodor Dostoevsky',
    id: "afa5b6f1-344d-11e9-a414-719c6709cf3e",
    born: 1821
  },
  { 
    name: 'Joshua Kerievsky', // birthyear not known
    id: "afa5b6f2-344d-11e9-a414-719c6709cf3e",
  },
  { 
    name: 'Sandi Metz', // birthyear not known
    id: "afa5b6f3-344d-11e9-a414-719c6709cf3e",
  },
]

/*
 * Suomi:
 * Saattaisi olla järkevämpää assosioida kirja ja sen tekijä tallettamalla kirjan yhteyteen tekijän nimen sijaan tekijän id
 * Yksinkertaisuuden vuoksi tallennamme kuitenkin kirjan yhteyteen tekijän nimen
 *
 * English:
 * It might make more sense to associate a book with its author by storing the author's id in the context of the book instead of the author's name
 * However, for simplicity, we will store the author's name in connection with the book
 *
 * Spanish:
 * Podría tener más sentido asociar un libro con su autor almacenando la id del autor en el contexto del libro en lugar del nombre del autor
 * Sin embargo, por simplicidad, almacenaremos el nombre del autor en conección con el libro
*/

let books = [
  {
    title: 'Clean Code',
    published: 2008,
    author: 'Robert Martin',
    id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring']
  },
  {
    title: 'Agile software development',
    published: 2002,
    author: 'Robert Martin',
    id: "afa5b6f5-344d-11e9-a414-719c6709cf3e",
    genres: ['agile', 'patterns', 'design']
  },
  {
    title: 'Refactoring, edition 2',
    published: 2018,
    author: 'Martin Fowler',
    id: "afa5de00-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring']
  },
  {
    title: 'Refactoring to patterns',
    published: 2008,
    author: 'Joshua Kerievsky',
    id: "afa5de01-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring', 'patterns']
  },  
  {
    title: 'Practical Object-Oriented Design, An Agile Primer Using Ruby',
    published: 2012,
    author: 'Sandi Metz',
    id: "afa5de02-344d-11e9-a414-719c6709cf3e",
    genres: ['refactoring', 'design']
  },
  {
    title: 'Crime and punishment',
    published: 1866,
    author: 'Fyodor Dostoevsky',
    id: "afa5de03-344d-11e9-a414-719c6709cf3e",
    genres: ['classic', 'crime']
  },
  {
    title: 'The Demon ',
    published: 1872,
    author: 'Fyodor Dostoevsky',
    id: "afa5de04-344d-11e9-a414-719c6709cf3e",
    genres: ['classic', 'revolution']
  },
]

const typeDefs = `
  type Genre {
    genre: String!
  }

  type Book {
    title:      String!
    author:     String!
    published:  Int!
    id:         ID!
    genres:     [String]!
  }

  type Book2 {
    title:  String!
    author: String!
  }

  type Author {
    name:   String!
    born:   Int!
    id:     ID!
  }

  type Author2 {
    name:       String!
    born:       Int!
    bookCount:  Int!
  }

  type Query {
    bookCount:      Int!
    authorCount:    Int!
    allAuthors:     [Author!]!
    allAuthors2:    [Author2!]!
    allBooks:       [Book!]!
    allBooks2(author: String, genre: String):   [Book!]!
  }

  type Mutation {
    addBook(
      title:      String!
      author:     String!
      published:  Int!
      genres:     [String]!
    ): Book

    editAuthor(
        name: String!
        setBornTo: Int!
      ): Author

  }
`

const resolvers = {
  Query: {
    bookCount:      () => books.length,
    authorCount:    () => authors.length,
    allAuthors:     () => authors,
    //allAuthors2:    () => authors,
    allAuthors2: () => {
      //console.log('*** All Authors query ***')
      authors.forEach((_a) => {
        if(!_a.hasOwnProperty('born') || _a.born === null) 
        {
          _a.born = 0
        }
      })
      return authors
    },
    allBooks:       () => {
      //console.log('*** All books query ***')
      //console.log(books)
      return books
    },
    allBooks2:      (root, args) => {
        console.log('ARGS: ', args)
        if(args.author && args.genre)
        {
            const b = books.filter(_b => _b.author === args.author)
            const bb = b.filter(_b => _b.genres.some(_g => _g === args.genre))
            return bb
        }
        if(args.author)
        {
            return books.filter(_b => _b.author === args.author)
        }
        if(args.genre)
        {
            const b = books.filter(_b => _b.genres.some(_g => _g === args.genre))
            return b
        }
        return books
    },
  },
  Author2:{
    bookCount: ( _author ) => {
        let z = 0
        z = books.filter(_b => _b.author == _author.name)
        return z.length
      },
  },
  Mutation: {
    addBook: (root, args) => {
      console.log('*** ADD BOOK ***')
      const _author = authors.find(a => a.name === args.author)
      if(_author === undefined)
      {
        const newAuthor = { name: args.author, born: null, id: uuid() }
        authors = authors.concat(newAuthor)
      }
        const newBook = { ...args, id: uuid() }
        books = books.concat(newBook)
        console.log('newBook: ', newBook)
        return newBook
    },    
    editAuthor: (root, args) => {
        console.log('ARGS: ', args)
        const _author = authors.find(a => a.name === args.name)
        if (!_author) {
          return null
        }
    
        const updated = { ..._author, born: args.setBornTo }
        authors = authors.map(a => a.name === args.name ? updated : a)
        return updated
      },
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})