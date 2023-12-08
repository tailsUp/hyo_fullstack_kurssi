/* eslint-disable no-unused-vars */
import ReactDOM           from 'react-dom/client'
import { Provider }       from 'react-redux' 
import store              from './services/store'
import App                from './App'
//import AnecdoteService  from './services/anecdotes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)