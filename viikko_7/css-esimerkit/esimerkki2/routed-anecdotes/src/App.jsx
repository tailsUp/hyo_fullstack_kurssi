/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams, useNavigate } from 'react-router-dom'
import { useField, useReset } from './hooks'
import { Table, Form, Button, Alert, Navbar, Nav } from 'react-bootstrap'

let timeoutID = ''

const Home = () => {
  return (
    <div>
      <h2>Anecdotes app</h2>
      <label>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
        industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
        it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </label>
      <br /><br />
    </div>
  )
}

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
      <Link style={padding} to="/">home</Link>
      <Link style={padding} to="/anecdotes">anecdotes</Link>
      <Link style={padding} to="/create">create new</Link>
      <Link style={padding} to="/about">about</Link>
    </div>
  )
}

const Menu2 = () => {
  /*return (
    <div>
      <Link style={padding} to="/">home</Link>
      <Link style={padding} to="/anecdotes">anecdotes</Link>
      <Link style={padding} to="/create">create new</Link>
      <Link style={padding} to="/about">about</Link>
    </div>
  )*/
  const padding = {
    paddingRight: 5
  }
  return (
    <div>
      <br/>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/">home</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/anecdotes">anecdotes</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/create">create</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link style={padding} to="/about">about</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
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
const Show = (x) => {
  /*if (x.onChange !== undefined) {
    return (
      <div>
        <div>{`a new anecdote: ${x.onChange} created!`}</div>
      </div>
    )
  }
  return null*/

  if (x.onChange !== undefined) {
    return (
      <div className="container">
        <br />
        <Alert variant="success">{`a new anecdote: ${x.onChange} created!`}</Alert>
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

const AnecdoteTable = ({ anecdotes }) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      <Table striped>
        <tbody>
          {anecdotes.map(note =>
            <tr key={note.id}>
              <td><Link to={`/anecdotes/${note.id}`}>{note.content}</Link></td>
              <td>{note.user}</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

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
      <br />
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
  /*const [content, setContent] = useState('')
  const [author, setAuthor] = useState('')
  const [info, setInfo] = useState('')*/
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

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
    props.reset({ content, author, info })
  }

  //<form onSubmit={handleSubmit}>

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            content: <input {...content} /><br />
          </div>
          <div>
            author: <input {...author} /><br />
          </div>
          <div>
            info: <input {...info} />
          </div>
        </div>
        <button>create</button>
        <br />
        <input type='button' onClick={clear} value='reset' />
        <br />
      </form>
    </div>
  )
}

let CreateNew2 = (props) => {

  const navigate = useNavigate()
  const content = useField('text')
  const author = useField('text')
  const info = useField('text')

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: e.target[0].value,
      author: e.target[1].value,
      info: e.target[2].value,
      votes: 0
    })
    console.log(e.target[0].value)
    navigate('/')
  }

  const clear = (event) => {
    console.log('Reset all fields')
    props.reset({ content, author, info })
  }

  return (
    <div>
      <h2>login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>content:</Form.Label>
          <Form.Control type="text" name="content" />
        </Form.Group>
        <Form.Group>
          <Form.Label>author:</Form.Label>
          <Form.Control type="text" name="author" />
        </Form.Group>
        <Form.Group>
          <Form.Label>info:</Form.Label>
          <Form.Control type="text" name="info" />
        </Form.Group>
        <Button variant="primary" type="submit">create</Button>
        <Button variant="primary" onClick={clear}>clear</Button>
      </Form>
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
  const [message, setMessage] = useState(null)

  const addNew = (anecdote) => {
    anecdote.id = Math.round(Math.random() * 10000)
    //setAnecdotes(anecdotes.concat(anecdote))
    //setAnecdotes(anecdotes.concat({ content: anecdote.content.value, author: anecdote.author.value, info: anecdote.info.value, id: anecdote.id }))
    setAnecdotes(anecdotes.concat({ content: anecdote.content, author: anecdote.author, info: anecdote.info, id: anecdote.id }))
    //setShow(anecdote.content.value)
    setShow(anecdote.content)
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      setShow(undefined)
    }, 5000)
  }

  const clear = (values) => {
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
    <div className="container">
      <Router>
        <Show onChange={show} />
        <Menu2 />
        <Show />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anecdotes" element={<AnecdoteTable anecdotes={anecdotes} />} />
          <Route path="/anecdotes/:id" element={<Anecdote anecdotes={anecdotes} />} />
          <Route path="/create" element={<CreateNew2 addNew={addNew} reset={clear} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

//<Route path="/anecdotes" element={<AnecdoteList anecdotes={anecdotes} />} />
//<Route path="/create" element={<CreateNew addNew={addNew} reset={clear} />} />

export default App
