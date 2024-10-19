import SetNames from './components/SetNames'
import Header from './components/Header'
import AddressInputs from './components/AddressInputs'
import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  const [filter, newFilter] = useState('')
  const [person, newPerson] = useState('add new person')
  const [number, newNumber] = useState('')
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])

  /**
   * Funktio lisää input kentästä uuden henkilön ja puhelinnumeron listalle. Ei anna lisätä saman nimisiä henkilöitä.
   * @param {Event} event - Event 
   */
  const addPerson = (event) => {
    event.preventDefault()
    console.log('add person: ', event)
    if (!persons.find(e => e.name.toLowerCase() === person.toLowerCase())) {
      console.log('Nimi ei ole listalla --> lisätään!')
      const newp = {
        name: person,
        number: number
      }
      setPersons(persons.concat(newp))
      newPerson('')
      newNumber('')
    } else {
      alert(`${person} is already added to phonebook`)
    }
  }

  /**
   * Funktio käsittelee input kentässä tapahtuvat muutokset.
   * @param {Event} event - Event 
   */
  const handlePersonChange = (event) =>{
    console.log('handlePersonChange: ', event.target.value)
    newPerson(event.target.value)
  }

  /**
   * Funktio käsittelee input kentässä tapahtuvan muutokset.
   * @param {Event} event - Event.
   */
  const handleNumberChange = (event) =>{
    console.log('handleNumberChange: ', event.target.value)
    newNumber(event.target.value)
  }

  /**
   * Funktio käsittelee filtterikentässä tapahtuvat muutokset.
   * @param {Event} event - Event.
   */
  const handleFilterChange = (event) =>{
    console.log('handleNFilterChange: ', event.target.value)
    newFilter(event.target.value)
  }

  return (
    <div>
      <Header nimi={'Phonebook'} />
      <AddressInputs text={'filter shown with: '} value={filter} change={handleFilterChange}/>
      <form onSubmit={addPerson}>
        <Header nimi={'Add a new'} />
        <AddressInputs text={'name: '} value={person} change={handlePersonChange} />
        <AddressInputs text={'number: '} value={number} change={handleNumberChange} />
        <Button text={'add'} type={'submit'} />
      </form>
      <Header nimi={'Numbers'} />
      <SetNames persons={persons} flt={filter}/>
    </div>
  )
}

export default App
