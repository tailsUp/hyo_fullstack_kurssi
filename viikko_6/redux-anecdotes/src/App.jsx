import AnecdoteList     from './components/AnecdoteList'
import AnecdoteForm     from './components/AnecdoteForm'
import Filter           from './components/FilterComponent'

const App = () => {

    return (
        <div>
            <h2>Anecdotes</h2>
            <Filter />
            <AnecdoteList />
            <AnecdoteForm />
        </div>
    )
}

export default App
