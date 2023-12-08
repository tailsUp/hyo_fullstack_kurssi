import ReactDOM                         from 'react-dom/client'
import { Provider }                     from 'react-redux'
import App                              from './App'
import { configureStore }               from '@reduxjs/toolkit'
import AnecdoteReducer                  from './reducers/anecdoteReducer'
import FilterReducer                    from './reducers/filterReducer'
import NotificationReducer              from './reducers/notificationReducer'
import Timer                            from './reducers/timerReducer'

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

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)