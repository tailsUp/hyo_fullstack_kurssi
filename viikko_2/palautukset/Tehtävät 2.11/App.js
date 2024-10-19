import { useState, useEffect } from 'react'
import axios from 'axios'
import SetAll from './components/SetAll'
import Header from './components/Header'
import AddressInputs from './components/AddressInputs'
import SetNames from './components/SetNames'
import Button from './components/Button'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, newFilter] = useState('')
  const [person, newPerson] = useState('add new person')
  const [number, newNumber] = useState('')

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }
  useEffect(hook, [])
  console.log('render', persons.length, 'persons')

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
