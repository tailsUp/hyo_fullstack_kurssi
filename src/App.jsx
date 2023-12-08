import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, createAnecdote, updateAnecdote } from './services/request'
import { useReducer } from 'react'
import showReducer from './reducers/showReducer'
import textReducer from './reducers/textReducer'
import timerReducer from './reducers/timerReducer'

const App = () => {

  const [show, showDispatch] = useReducer(showReducer, false)
  const [text, textDispatch] = useReducer(textReducer, '')
  const [timer, timerDispatch] = useReducer(timerReducer, '')

  const queryClient = useQueryClient()

  let anecdotes = [
    {
      "content": "If it hurts, do it more often",
      "id": "47145",
      "votes": 0
    },
  ]

  /**
   * Funktio päivittää ruudun näkymän (forced).
   */
  const updateUI = () => {
    queryClient.refetchQueries({ stale: true })
  }

  /**
   * Funktio tyhjentää 2/3 dispatchia.
   */
  const clearAll = () => {
    textDispatch({ type: 'NO_TEXT' })
    showDispatch({ type: 'HIDE' })
  }

  /**
   * 
   * Funktio asettelee Notifikaatioiden näkydyyvet ja sen sisään tulevan tekstin.
   * 
   * @param {Type} _type1   - showDispatch.
   * @param {Type} _type2   - textDispatch.
   * @param {String} _text  - Notifikaation teksti.
   */
  const setNotification = (_type1, _type2, _text) => {
    textDispatch({ type: _type1, newText: _text })
    showDispatch({ type: _type2 })
  }

  /**
   * 
   * Funktio käsittelee äänestyslogiikan ja muuttaa alifunktion avulla äänien määrää näytöllä.
   * 
   * @param {Object} _anecdote 
   */
  const handleVote = (_anecdote) => {
    console.log('Vote anecdote: ', _anecdote)
    const _votes = _anecdote.votes + 1
    console.log('votes old: ', _anecdote.votes)
    console.log('votes new: ', _votes)
    const temp = { ..._anecdote, votes: _votes }
    setNotification('TEXT', 'SHOW', `anecdote '${_anecdote.content}' voted`)
    updateAnecdoteMutation.mutate(temp)
  }

  /**
   * Funktio kutsuu tietokantaa ja päivittää olion äänien määrän.
   */
  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    onSuccess: (_anecdote) => {
      queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
      updateUI()
      clearTimeout(timer)
      timerDispatch({ type: 'START', setTimer: setTimeout(() => { clearAll() }, 5000) })
    },
    onError: (error) => {
      console.log('Error: ', error.response.status)
      console.log('Error in voting!')
      setNotification('TEXT', 'SHOW', `Error in voting. Try again!`)
      clearTimeout(timer)
      timerDispatch({ type: 'START', setTimer: setTimeout(() => { clearAll() }, 5000) })
    },
    throwOnError: () => {
      console.log('ASD')
    }
  })

  /**
   * Funktio lisää uuden anekdootin tietokantaan. Jos palautteena on POST virhe niin tällöin ei lisätä. Jos POST virhe on 400
   * niin kerrotaan käyttäjälle mitkä ehdot anekdootin pitää täyttää.
   */
  const newAnecdoteMutation = useMutation({
    mutationFn: createAnecdote,
    onSuccess: (_anecdote) => {
      let temp = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', temp)
      updateUI()
      setNotification('TEXT', 'SHOW', `anecdote: '${_anecdote.content}' has been added`)
      clearTimeout(timer)
      timerDispatch({ type: 'START', setTimer: setTimeout(() => { clearAll() }, 5000) })
    },
    onError: (error) => {
      if (error.response.status === 400) {
        console.log('Your anecdote was too short. it has to be five letters or more.')
        setNotification('TEXT', 'SHOW', `too short anecdote, must have length 5 or more`)
        clearTimeout(timer)
        timerDispatch({ type: 'START', setTimer: setTimeout(() => { clearAll() }, 5000) })
      }
    }
  })

  /**
   * 
   * Funktioon tullaan tiedostosta AnecdoteForm, funktiosta onCreate.
   * 
   * @param {String} content 
   */
  const addAnecdote = async (content) => {
    console.log('Adding anecdote: ', content)
    const temp = { content, votes: 0 }
    newAnecdoteMutation.mutate(temp)
  }

  /**
   * Funtkio hakee kaikki anekdootit tietokannasta. Riippuen haun tilanteesta niin palautetaan eri näkymä
   * käyttäjälle.
   */
  const { isPending, isError, data, error } = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
  })

  /**
   * Ilmoitetaan käyttäjälle että lataus käynnissä.
   */
  if (isPending) {
    return <span>Loading server data, please wait...</span>
  }

  /**
   * Ilmoitetaan käyttäjälle että tietokantaa ei saada tavoitettua.
   */
  if (isError) {
    return <span>anecdote service not available due to problems in server</span>
  }

  /**
   * Tallennetaan tietokanta muuttujaan anecdotes ja näytetään käyttäjälle normaali näkymä.
   */
  if (data) {
    console.log('Query tulos: ', JSON.parse(JSON.stringify(data)))
    anecdotes = data
    queryClient.setQueryData('anecdotes', data)
  }

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification visible={show} showText={text} />
      <AnecdoteForm add={addAnecdote} />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
