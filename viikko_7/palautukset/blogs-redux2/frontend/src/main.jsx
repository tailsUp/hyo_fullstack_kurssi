import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import App from './App'
//Reducers:
import BlogReducer from './reducers/blogReducer'
import NotificationReducer from './reducers/notificationReducer'
import TimerReducer from './reducers/timerReducer'
import ShowReducer from './reducers/showReducer'
import LoginReducer from './reducers/loginReducer'
import UserReducer from './reducers/userReducer'

/*const reducer = combineReducers({
  blogReducer:          BlogReducer,
  notificationReducer:  NotificationReducer,
  timerReducer:         TimerReducer,
  showReducer:          ShowReducer,
  loginReducer:         LoginReducer,
})

const store = createStore(reducer)*/

const store = configureStore({
    reducer: {
        blogReducer: BlogReducer,
        notificationReducer: NotificationReducer,
        timerReducer: TimerReducer,
        showReducer: ShowReducer,
        loginReducer: LoginReducer,
        userReducer: UserReducer,
    },
})

console.log('Store stata on first upload: ', store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)
