import ReactDOM                         from 'react-dom/client'
import { Provider }                     from 'react-redux'
import App                              from './App'
import { createStore, combineReducers } from 'redux'
import Reducer                          from './reducers/anecdoteReducer'
import Filter                           from './reducers/filterReducer'

const reducer = combineReducers(
  {
    anecdotes: Reducer,
    filter: Filter
  })

const store = createStore(reducer)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)