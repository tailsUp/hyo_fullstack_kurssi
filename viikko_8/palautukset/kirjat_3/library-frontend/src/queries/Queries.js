import { gql } from '@apollo/client'

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
  mutation addBook($title: String!, $published: Int!, $genres: [String]!, $authorID: String!, $authorName: String!) {
    addBook(title: $title, published: $published, genres: $genres, authorID: $authorID, authorName: $authorName) {
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

/*mutation AddBook($title: String!, $author: String!, $published: Int!, $genres: [String]!) 
{
  addBook(title: $title, author: $author, published: $published, genres: $genres) {
    author
    genres
    id
    published
    title
  }
}*/


/*
export const CREATE_BOOK = gql`
mutation addBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
  addBook(
    title: $title,
    author: $author,
    published: $published,
    genres: $genres
  ) {
    name
    id
  }
}
`
*/

/*
export const FIND_PERSON = gql`
query findPersonByName($nameToSearch: String!) {
  findPerson(name: $nameToSearch) {
    name
    phone
    id
    address {
      street
      city
    }
  }
}
`

export const CREATE_PERSON = gql`
mutation createPerson($name: String!, $street: String!, $city: String!, $phone: String) {
  addPerson(
    name: $name,
    street: $street,
    city: $city,
    phone: $phone
  ) {
    name
    phone
    id
    address {
      street
      city
    }
  }
}
`

export const EDIT_NUMBER = gql`
  mutation editNumber($name: String!, $phone: String!) {
    editNumber(name: $name, phone: $phone)  {
      name
      phone
      address {
        street
        city
      }
      id
    }
  }
`
*/