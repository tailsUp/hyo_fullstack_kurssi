/* eslint-disable no-unused-vars */
import { useEffect }    from 'react'
import AnecdoteList     from './components/AnecdoteList'
import AnecdoteForm     from './components/AnecdoteForm'
import Filter           from './components/FilterComponent'
import Notification     from './components/Notification'
import AnecdoteService  from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch }  from 'react-redux'
import { initializeAnecodtesThunk } from './reducers/anecdoteReducer'

const App = () => {

    const dispatch = useDispatch()  
    
    /*useEffect(() => {
        AnecdoteService.getAll().then(
            _anecdotes => dispatch(setAnecdotes(_anecdotes)))
        },[dispatch])*/

    useEffect(() => {
        dispatch(initializeAnecodtesThunk())
        }, []) 

    return (
        <div>
            <h2>Anecdotes</h2>
            <Notification />
            <Filter />
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    )
}

export default App
