const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { GraphQLError } = require('graphql')
const jwt = require('jsonwebtoken')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const Author = require('./models/author')
const Book = require('./models/Book')
require('dotenv').config()
const ObjectId = require('mongodb').ObjectID;
const { v1: uuid } = require('uuid')

const MONGODB_URI = process.env.MONGODB_URI

console.log('connecting to', MONGODB_URI)

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connection to MongoDB:', error.message)
})

let authors  = []
let books   = []

const typeDefs = `
  type Genre {
    genre: String!
  }

  type Book {
    title:      String!
    published:  Int!
    id:         ID!
    genres:     [String]!
    author:     Author!
  }

  type Book2 {
    title:  String!
    author: Author!
  }

  type Book3 {
    title:      String!
    published:  Int!
    id:         ID!
    genres:     [String]!
    author:     Author!
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
    allBooks2(author: String, genre: String):            [Book!]!
    getAuthID(authorName: String!):            String!
  }

  type Mutation {
    addBook(
      title:      String!,
      published:  Int!,
      genres:     [String]!,
      authorID:   String!,
      authorName: String!
    ): Book
    
    getAuthors:   [Author!]!

    editAuthor(
        name: String!
        setBornTo: Int!
      ): Author

  }
`

/*

    addBook2(
      title:      String!
      published:  Int!
      genres:     [String]!
      authorID:   String!
      authorName: String!
    ): Book3

*/

const validateNewBook = (props) => {
  console.log('VALIDATE: ', props)
  if(props.title.length < 5) 
  {
    throw new GraphQLError('Book title is too short. Has to be atleast 5 characters.', {
      extensions: {
        code: 'TITLE_SHORT',
      },
    })
  }
  if(props.authorName.length < 4) 
  {
    throw new GraphQLError('Author name is too short. Has to be atleast 4 characters.', {
      extensions: {
        code: 'AUTHOR_SHORT',
      },
    })
  }
  if(props.published.toString().length < 2 || props.published.toString().length > 4) 
  {
    throw new GraphQLError('Inserted year is in wrong. Has to be between two to four digits.', {
      extensions: {
        code: 'PUBLISHED_FORMAT',
      },
    })
  }
}

const resolvers = {
  Query: {
    //bookCount: () => books.length,
    bookCount: async () => Book.collection.countDocuments(),
    authorCount: async () => Author.collection.countDocuments(),
    allAuthors: async () => {
      authors = await Author.find({})
      return authors
    },
    allAuthors2: async () => {
      authors = await Author.find({})
      return authors
    },
    allBooks:       async () => {
      books = await Book.find({}).populate('author', { name: 1, born: 1 })
      return books
    },
    allBooks2: async (root, args) => {
        books = await Book.find({}).populate('author', { name: 1, born: 1 })
        return books
    },
    getAuthID: async (root, args) => {
      console.log('getAUTHID: ', args)
      if(authors.length < 1)
      {
        return ""
      }
      const _au = authors.filter((_a) => _a.name === args.authorName)
      if(_au === null || _au === undefined)
      {
        return ""
      }
      const _return = ObjectId(_au._id)
      return _return.toString()
  },
  },
  Author2:{
    bookCount: ( _author ) => {
        //return 100
        let z = 0
        z = books.filter(_b => _b.author.name == _author.name)
        return z.length
      },
  },
  Mutation: {
    getAuthors: async() => {
      authors = await Author.find({})
      return authors
    },
    addBook: async (root, args) => {
      console.log('*** ADD BOOK ORIGINAL ***', args)
      const ok = validateNewBook(args)
      const authors = await Author.find({})
      console.log(args)
      //const _author = authors.find(a => a._id === args.authorID)
      const _author = authors.find(a => a.name === args.authorName)
      console.log('kirjailija löytyi: ', _author)
      if(_author !== undefined) 
      {
        console.log('Kirjailija löytyi: ', _author)
        const newBook = new Book({ title: args.title, author: _author, published: args.published, genres: args.genres, id: uuid() })
        books = books.concat(newBook)
        console.log('UUSI KIRJA: ', newBook)
        await newBook.save()
        return newBook
      }
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
  context: async ({ req, res }) => {
    const auth = req ? req.headers.authorization : null
    if (auth && auth.startsWith('Bearer ')) {
      const decodedToken = jwt.verify(
        auth.substring(7), process.env.JWT_SECRET
      )
      //const currentUser = await User.findById(decodedToken.id).populate('friends')
      return { currentUser }
    }
  },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`)
})