import { configureStore }   from '@reduxjs/toolkit'
import AnecdoteReducer      from '../reducers/anecdoteReducer'
import FilterReducer        from '../reducers/filterReducer'
import NotificationReducer  from '../reducers/notificationReducer'
import Timer                from '../reducers/timerReducer'

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

export default store