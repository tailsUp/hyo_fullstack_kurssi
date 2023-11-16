import ReactDOM                         from 'react-dom/client'
import { Provider }                     from 'react-redux'
import App                              from './App'
import { configureStore }               from '@reduxjs/toolkit'
import Reducer                          from './reducers/anecdoteReducer'
import Filter                           from './reducers/filterReducer'

const store = configureStore(
  {
    reducer: {
      anecdotes: Reducer,
      filter: Filter
    }
  }  
)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)