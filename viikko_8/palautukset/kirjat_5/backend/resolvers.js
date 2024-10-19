const { GraphQLError }  = require('graphql')
const jwt               = require('jsonwebtoken')
const { PubSub }        = require('graphql-subscriptions')
const { v1: uuid }      = require('uuid')
const pubsub            = new PubSub()
const Book              = require('./models/book')
const Author            = require('./models/author')
const User              = require('./models/user')

let authors = []
let books = []

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
      bookCount: async () => Book.collection.countDocuments(),
      authorCount: async () => Author.collection.countDocuments(),
      allAuthors: async () => {
        authors = await Author.find({})
        return authors
      },
      allGenres: async () => {
        let _genres = []
        let _initial = books.map((_b) => _b.genres.map((_g) => _g))
  
        _initial.forEach((_list) => {
          _list.map((_genre) => {
            let index = _genres.findIndex((_cmpr) => _cmpr === _genre)
            if (index === -1) {
              _genres.push(_genre)
            } 
          })
        })
        console.log(_genres)
        return _genres
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
        console.log('Author: ', _au[0])
        console.log('Author ID: ', _au[0]._id)
        //const _return = ObjectId(_au[0]._id)
        //console.log('ID: ', _return)
        //return _return.toString()
        return  _au[0]._id.toString()
    },
    },
    Author2:{
      bookCount: ( _author ) => {
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
        login: async (root, args) => {
          console.log('ASDASD: ', args)
          const user = await User.findOne({ username: args.username })
          console.log(user)
          if ( !user || args.password !== 'secret' ) {
            throw new GraphQLError('wrong credentials', {
              extensions: { code: 'BAD_USER_INPUT' }
            })        
          }
      
          const userForToken = {
            username: user.username,
            id: user._id,
          }
          
          console.log(user.favoriteGenre)
  
          return { value: jwt.sign(userForToken, process.env.JWT_SECRET), genre: user.favoriteGenre }
        },
        addBook: async (root, args) => {
          console.log('*** ADD BOOK ORIGINAL ***', args)
          const ok = validateNewBook(args)
          let newBook = ''
          if(args.create) 
          {
            //Kirjailijaa ei ole olemassa. Luodaan se.
            console.log('KIRJAILIJAA EI OLE OLEMASSA!')
            const _newAuthor = new Author({ name: args.authorName, born: 0, id: uuid()})
            await _newAuthor.save()
            console.log('UUSI: ', _newAuthor)
            newBook = new Book({ title: args.title, author: _newAuthor.id, published: args.published, genres: args.genres, id: uuid() })
          }
          else
          {
            const authors = await Author.find({})
            //const _author = authors.find(a => a._id === args.authorID)
            const _author = authors.find(a => a.name.toLowerCase() === args.authorName.toLowerCase())
            console.log('kirjailija löytyi: ', _author)
            newBook = new Book({ title: args.title, author: _author._id, published: args.published, genres: args.genres, id: uuid() })
          }
          books = books.concat(newBook)
          console.log('UUSI KIRJA: ', newBook)
          await newBook.save()
          pubsub.publish('BOOK_ADDED', { bookAdded: newBook }) 
          return newBook
      },
    },
    Subscription: {
        bookAdded: {
            subscribe: () => pubsub.asyncIterator('BOOK_ADDED') 
        },
    },
  }

  module.exports = resolvers