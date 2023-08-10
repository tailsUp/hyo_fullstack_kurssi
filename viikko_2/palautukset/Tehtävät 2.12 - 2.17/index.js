import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

//const promise = axios.get('http://localhost:3001/notes')

//promise.then(response => {
//  console.log(response)
//})

/*
axios.get('http://localhost:3001/notes').then(response => {
  const notes = response.data
  console.log('response: ', response)
  ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />)
})
*/

ReactDOM.createRoot(document.getElementById('root')).render(<App />)