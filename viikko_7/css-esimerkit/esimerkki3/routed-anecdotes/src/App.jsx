/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate} from 'react-router-dom'
import  { useField, useReset } from './hooks'
import { Container, TableContainer, Table, TableBody, TableCell, TableRow, Paper, TextField, Button, Alert, AppBar, Toolbar, IconButton } from '@mui/material'

let timeoutID = ''

/**
 * 
 * Funktio palauttaa ylärivillä näkyvän valikon.
 * 
 * @returns Component.
 */
const Menu = () => {
  const padding = {
    paddingRight: 5
  }
  return (
  <div>
    <Link style={padding} to="/">anecdotes</Link>
    <Link style={padding} to="/create">create new</Link>
    <Link style={padding} to="/about">about</Link>
</div>
  )
}

const Menu2 = () => {
  const padding = {
    paddingRight: 5
  }
  return (
  <div>
<AppBar position="static">
  <Toolbar>
    <Button color="inherit" component={Link} to="/">
      anecdotes
    </Button>
    <Button color="inherit" component={Link} to="/create">
      creat new
    </Button>
    <Button color="inherit" component={Link} to="/about">
      about
    </Button>                     
  </Toolbar>
</AppBar>
</div>
  )
}

/**
 * 
 * Funktio palauttaa komponentin jos "tietokantaan" lisätään uusi anekdootti.
 * 
 * @param {onChange} x  - onChange funktio joka sisältää tekstin. 
 * @returns Component.
 */
const Show = ( x ) => {
  if(x.onChange !== undefined)
  {
    return (
      <div>
        <Alert severity="success">{`a new anecdote: ${x.onChange} created!`}</Alert>
        <br/>
      </div>
    )
  }
  return null
}

/**
 * 
 * Funktio palauttaa komponenttilistan.
 * 
 * vanha: <ul>{anecdotes.map(anecdote => <li key={anecdote.id} >{anecdote.content}</li>)}</ul>
 * 
 * @param {List} anecdotes
 * @returns Component.
 */
const AnecdoteList = ({ anecdotes }) => (
  <div>
    <h2>Anecdotes</h2>
    <ul>
      {anecdotes.map(anecdote => 
        <li key={anecdote.id}>
          <Link to={`/anecdotes/${anecdote.id}`}>{anecdote.content}</Link>
        </li>)}
    </ul>
  </div>
)

const AnecdotesTable = ({ anecdotes }) => (
  <div>
    <h2>Notes</h2>

    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {anecdotes.map(_a => (
            <TableRow key={_a.id}>
              <TableCell>
                <Link to={`/anecdotes/${_a.id}`}>{_a.content}</Link>
              </TableCell>
              <TableCell>
                {_a.name}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <br/>
  </div>
)

/**
 * 
 * Funktio palauttaa yksittäisen Anekdootti komponentin.
 * 
 * @param {List} anecdotes
 * @returns Component
 */
const Anecdote = ({ anecdotes }) => {
  const ID = useParams().id
  const anecdote = anecdotes.find(anecdote => anecdote.id === Number(ID))
  return (
    <div>
      <h4>ANECDOTE</h4>
      <div>content: {anecdote.content}</div>
      <div>author: {anecdote.author}</div>
      <div>extra: {anecdote.info}</div>
      <div>votes: {anecdote.votes}</div>
      <br/>
    </div>
  )
}

/**
 * 
 * Funktio palauttaa komponentin joka sisältää informaatiota sivustosta.
 * 
 * @returns Component.
 */
const About = () => (
  <div>
    <h2>About anecdote app</h2>
    <p>According to Wikipedia:</p>

    <em>An anecdote is a brief, revealing account of an individual person or an incident.
      Occasionally humorous, anecdotes differ from jokes because their primary purpose is not simply to provoke laughter but to reveal a truth more general than the brief tale itself,
      such as to characterize a person by delineating a specific quirk or trait, to communicate an abstract idea about a person, place, or thing through the concrete details of a short narrative.
      An anecdote is a story with a point.</em>

    <p>Software engineering is full of excellent anecdotes, at this app you can find the best and add more.</p>
  </div>
)

/**
 * 
 * Funktio palauttaa sivustolla näkyvän footer-komponentin.
 * 
 * @returns Component.
 */
const Footer = () => (
  <div>
    Anecdote app for <a href='https://fullstackopen.com/'>Full Stack Open</a>.

    See <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js</a> for the source code.
  </div>
)

/**
 * 
 * Funktio palauttaa komponentin joka sisältää form-elementin ja uuden olion luomisen tietokantaan. 
 * 
 * @param {Properties} props 
 * @returns Component.
 */
const CreateNew = (props) => {
  const navigate = useNavigate()
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const reset2 = useReset('')
  const reset = useField('')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content,
      author,
      info,
      votes: 0
    })
    console.log(e.target[0].value)
    navigate('/')
  }

  const clear = (event) => {
    console.log('Reset all fields')
    props.reset({content,author,info})
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
      <div>
        <div>
          content: <input {...content} /><br/>  
        </div>
        <div>
          author: <input {...author} /><br />
        </div>
        <div>
          info: <input {...info} />
        </div>       
      </div>
        <button>create</button>
        <br/>
        <input type='button' onClick={clear} value='reset'/>
        <br/>
      </form>
    </div>
  )
}

const CreateNew2 = (props) => {
  const navigate = useNavigate()
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: e.target[0].value,
      author: e.target[2].value,
      info: e.target[4].value,
      votes: 0
    })
    console.log(e.target[0].value)
    navigate('/')
  }

  const clear = (event) => {
    console.log('Reset all fields')
    props.reset({content,author,info})
  }

  return (
    <div>
      <h2>login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField label="content:" />
        </div>
        <div>
          <TextField label="author:" />
        </div>
        <div>
          <TextField label="info:"/>
        </div>
        <div>
          <Button variant="contained" color="primary" type="submit">
            create
          </Button>
        </div>
      </form>
    </div>
  )
}

/**
 * 
 * Funktio palauttaa App-komponentin joka sisältää sivun näkymän ja logiikan.
 * 
 * @returns Component / koko sivu.
 */
const App = () => {
  const [show, setShow] = useState(undefined)
  const [anecdotes, setAnecdotes] = useState([
    {
      content: 'If it hurts, do it more often',
      author: 'Jez Humble',
      info: 'https://martinfowler.com/bliki/FrequencyReducesDifficulty.html',
      votes: 0,
      id: 1
    },
    {
      content: 'Premature optimization is the root of all evil',
      author: 'Donald Knuth',
      info: 'http://wiki.c2.com/?PrematureOptimization',
      votes: 0,
      id: 2
    }
  ])

  const [notification, setNotification] = useState('')

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    //setAnecdotes(anecdotes.concat(anecdote))
    setAnecdotes(anecdotes.concat({content: anecdote.content, author: anecdote.author, info: anecdote.info, id: anecdote.id}))
    setShow(anecdote.content)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      setShow(undefined)
    }, 5000)
  }

  const clear = ( values ) => {
    console.log('Values coming in: ', values)
    values.content.onClick()
    values.author.onClick()
    values.info.onClick()
    console.log('Values going out: ', values)
  }

  const anecdoteById = (id) =>
    anecdotes.find(a => a.id === id)

  const vote = (id) => {
    const anecdote = anecdoteById(id)

    const voted = {
      ...anecdote,
      votes: anecdote.votes + 1
    }

    setAnecdotes(anecdotes.map(a => a.id === id ? voted : a))
  }

  return (
    <Container>
      <div>
        <Router>
          <h1>Software anecdotes</h1>
          <Show onChange={show} />
          <Menu2 />
          <Show />
          <Routes>
            <Route path="/" element={<AnecdotesTable anecdotes={anecdotes} />} />
            <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} />
            <Route path="/create" element={<CreateNew2 addNew={addNew} reset={clear}/>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </Container>
  )
}

export default App
