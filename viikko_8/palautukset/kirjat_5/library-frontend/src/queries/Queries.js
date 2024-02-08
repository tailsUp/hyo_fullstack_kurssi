import { gql } from '@apollo/client'

const BOOK_DETAILS = gql`
  fragment BookDetails on Book {
    id
    title
    author
    published
    genres
  }
`

export const BOOK_ADDED = gql`
  subscription {
    bookAdded {
      ...BookDetails
    }
  }
  ${BOOK_DETAILS}
`

export const ALL_GENRES = gql`
  query {
    allGenres
  }
`

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password)  {
      value
      genre
    }
  }
`

export const ALL_AUTHORS = gql`
  query {
    allAuthors2  {
      name
      born
      bookCount
    }
  }
`

export const ALL_BOOKS = gql`
  query {
    allBooks2 {
      title
      published
      id
      genres
      author {
        name
        born
      }
    }
  }
`

export const GET_AUTH_ID = gql`
  query Query($authorName: String!) {
    getAuthID(authorName: $authorName)
  }
`

export const CREATE_BOOK = gql`
  mutation addBook($title: String!, $published: Int!, $genres: [String]!, $authorID: String!, $authorName: String!, $create: Boolean) {
    addBook(title: $title, published: $published, genres: $genres, authorID: $authorID, authorName: $authorName, create: $create) {
      title
      published
      genres
    }
  }
`

export const EDIT_AUTHOR = gql`
  mutation EditAuthor($name: String!, $year: Int!) {
    editAuthor(name: $name, setBornTo: $year)  {
      name
      born
      id
    }
  }
`
