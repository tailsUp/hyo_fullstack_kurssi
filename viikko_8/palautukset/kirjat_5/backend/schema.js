const typeDefs = `
  type User {
    username: String!
    favoriteGenre: String!
    id: ID!
  }

  type Token {
    value: String!
    genre: String!
  }

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
    me:             User
    bookCount:      Int!
    authorCount:    Int!
    allAuthors:     [Author!]!
    allAuthors2:    [Author2!]!
    allBooks:       [Book!]!
    allGenres:      [String]!
    allBooks2(author: String, genre: String):  [Book!]!
    getAuthID(authorName: String!):            String!
  }

  type Mutation {
    addBook(
      title:      String!,
      published:  Int!,
      genres:     [String]!,
      authorID:   String!,
      authorName: String!
      create:     Boolean,
    ): Book
    getAuthors: [Author!]!
    editAuthor( name: String!, setBornTo: Int! ): Author
    createUser( username: String!, favoriteGenre: String! ): User
    login( username: String!, password: String! ): Token
  }

  type Subscription {
    bookAdded: Book!
  }
`
module.exports = typeDefs