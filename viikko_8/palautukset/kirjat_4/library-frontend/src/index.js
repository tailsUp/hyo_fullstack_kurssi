/*import ReactDOM       from 'react-dom/client'
import App            from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)*/



import ReactDOM from 'react-dom/client'
import App from './App'

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'http://localhost:4000',
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('esim-token')
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : null,
    }
  }})

  const link = createHttpLink({
    uri: 'http://localhost:4000',
    credentials: 'same-origin'
  })

  const client = new ApolloClient({
    //link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    link
  })

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
