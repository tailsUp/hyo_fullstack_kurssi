/* eslint-disable no-unused-vars */
import ReactDOM                             from 'react-dom/client'
import { Provider }                         from 'react-redux'
import App                                  from './App'
import { configureStore }                   from '@reduxjs/toolkit'
import AnecdoteReducer, 
{ appendAnecdote, setAnecdotes }            from './reducers/anecdoteReducer'
import FilterReducer                        from './reducers/filterReducer'
import NotificationReducer                  from './reducers/notificationReducer'
import Timer                                from './reducers/timerReducer'
import AnecdoteService                      from './services/anecdotes'

const store = configureStore(
  {
    reducer: {
      anecdotes: AnecdoteReducer,
      filter: FilterReducer,
      notification: NotificationReducer,
      timer: Timer,
    }
  }  
)

/*
Tämä hakee kaikki anekdootit ja lisää ne yhdellä kerralla
AnecdoteService.getAll().then(
  _anecdotes => store.dispatch(
    setAnecdotes(_anecdotes)
  )
)
*/

/*
Tämä käy anekdootit läpi yksikerrallaan.
AnecdoteService.getAll().then(
  _anecdotes =>  _anecdotes.forEach(
    _anecdote => {
      store.dispatch(appendAnecdote(_anecdote))
    }
  )
)
*/

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)