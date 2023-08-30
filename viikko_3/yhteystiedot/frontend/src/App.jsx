import { useState, useEffect } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Inputs from './components/Inputs'
import accessDB from './services/DatabaseAccess'
import ContactRow from './components/ContactRow'
import DuplicateContact from './validate/DuplicateContact'
import NewPerson from './components/Person'
import Notification from './alerts/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newFilter, setFilter] = useState('')
  const [newName, setName] = useState('add new person')
  const [newNumber, setNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [isSuccess, setSuccess] = useState(false)

  useEffect(() => {
    accessDB.getAll().then(response => {
      setPersons(response)
    })
  },
    [])

  /**
   * Funktio tyhjentää input kentät näytöltä (pois lukien filtteri).
   */
  const emptyContantInputs = () => {
    setName('')
    setNumber('')
  }

  /**
   * Funktio päivittää viestin sisällön onnistuneissa suorituksissa. Kutsuu lopuksi myös funktiota joka tyhjentää viestin sisällön.
   * @param {String} text   - Teksti joka tulee onnisutneen viestin sisään. 
   */
  const notificationSuccess = (text) => {
    emptyNotificationNow()
    setErrorMessage(`${text}`)
    setSuccess(true)
    emptyNotificationTimer()
  }

  /**
   * Funktio päivittää viestin sisällön epäonnistuneissa suorituksissa. Kutsuu lopuksi myös funktiota joka tyhjentää viestin sisällön.
   * @param {String} text   - Teksti joka tulee onnisutneen viestin sisään. 
   */
  const notificationError = (text) => {
    emptyNotificationNow()
    setErrorMessage(`${text}`)
    setSuccess(false)
    emptyNotificationTimer()
  }

  const emptyNotificationNow = () => {
    setErrorMessage(null)
    setSuccess(undefined)
  }

  /**
   * Funktio tyhjentää notifikaatioiden sisällön.
   */
  const emptyNotificationTimer = () => {
    setTimeout(() => {
      setErrorMessage(null)
      setSuccess(undefined)
    }, 5000)
  }

  /**
   * Funktio lisää uuden yhteysolion listalle asynkronisesti. Eli setpersons tapahtuu jossain vaiheessa - EI HETI!
   * Sen takia lisäys tapahtuu then sisällä.
   */
  const addNewContact = () => {
    let newContact = NewPerson(newName, newNumber)
    accessDB.create(newContact).then(response => {
      if(response.hasOwnProperty('id'))
      {
        newContact = response
        setPersons(persons.concat(newContact))
        console.log('New contact has been created and added to the list: ', persons, newContact)
        notificationSuccess(`Added ${newContact.name}`)
      }
      else 
      {
        const modded = response.replace("Person validation failed:", "Error in adding a new contact. Error fields: ")
        notificationError(modded)
      }
    }).catch(error => {
      console.log(error)
    })
    emptyContantInputs()
  }

  /**
   * Funktio varmistaa käyttäjältä että hän haluaa päivittää yhteystiedon puhelinnumeron.
   * @param {Object} duplicate  - Kontakti-olio. 
   */
  const confirmNumberChange = (duplicate, newNum) => {
    if (/[0-9]{2,3}\-[0-9]{5,10}$/.test(newNum)) 
    {
      const ok = window.confirm(`${duplicate.name} is already in the phonebook, replace the old number with a new one?`)
      if (ok) {
        console.log(`User has decided to update ${duplicate.name} old number: ${duplicate.number} to new number: ${newNumber}`)
        updateNewNumber(duplicate)
      }
    }
    else 
    {
      notificationError(`Given number is not a valid phone number!`, false)
    }
  }

  /**
   * Funktio päivittää olemassa olevan kontaktin puhelinnumeron. Muokkaus tapahtuu asynkronisesti, jonka takia kaikki on then sisällä.
   * @param {Object} duplicate  - Kontakti-olio. 
   */
  const updateNewNumber = (duplicate) => {
    let fail = ''
    const updatedContact = { ...duplicate, number: newNumber }
    fail = accessDB.update(updatedContact.id, updatedContact).then(response => {
      if (response === false) {
        notificationError(`Contact ${duplicate.name} has already been removed from database. Please refresh your page!`)
      }
      else {
        setPersons(persons.map(pe => pe.id !== updatedContact.id ? pe : response))
        console.log('Contact has been updated!')
        notificationSuccess(`Updated ${duplicate.name} phonenumber`)
      }
    })
    emptyContantInputs()
  }

  /**
   * Funktio lisää input kentästä uuden henkilön ja puhelinnumeron listalle. Ei anna lisätä saman nimisiä henkilöitä.
   * @param {Event} event - Event 
   */
  const handleSubmit = (event) => {
    event.preventDefault()
    const newNum = event.currentTarget[1].value
    console.log(persons)
    console.log("handleSubmit")
    const duplicate = DuplicateContact(newName, persons)
    if (duplicate === undefined) {
      console.log('No matching name was found from contacts!')
      addNewContact()
    }
    else {
      console.log('Mathing name was found!')
      confirmNumberChange(duplicate, newNum)
    }
  }

  /**
   * Funktio käynnistää yhteystiedon poiston. Ottaa eventistä talteen uniikin id:n ja hakee sen perusteella koko yhteystieto olion ja 
   * välittää sen confirmDelete funktiolle.
   * @param {Event} event   - Event. 
   */
  const handleDelete = (event) => {
    event.preventDefault()
    console.log("handleDelete")
    //const deleteID = Number(event.target.id) <-- TÄTÄ KÄYTETTY VANHAN TIETOKANNAN KANSSA -- HUOM! ID EI OLE ENÄÄ NUMERO MUODOSSA!!!
    const deleteID = event.target.id
    const del = accessDB.returnPersonByID(persons, deleteID) 
    confirmDelete(del)
  }

  /**
   * Funktio varmistaa käyttäjältä että tämä haluaa poistaa yhteystiedon. Jos kyllä
   * niin poistetaan kutsumalla funktiota deleteContact luokassa DatabaseAccess.
   * @param {Object} del  - poistettava yhteystieto. 
   */
  const confirmDelete = (del) => {
    const ok = window.confirm(`Delete ${del.name} ?`)
    if (ok) {
      accessDB.deleteContact(del.id).then(response => {
        if (response === false) {
          notificationError(`There was a problem with deleting contact: Refresh your page and try again later.`)
        }
        else 
        {
          const temp = persons.filter(employee => employee.id !== del.id)
          setPersons(temp)
          console.log('Contact has been updated!')
          notificationSuccess(`Deleted ${del.name}`)
        }
      })
    }
  }

  /**
   * Funktio käsittelee input kentässä tapahtuvat muutokset.
   * @param {Event} event - Event 
   */
  const nameInputChange = (event) => {
    setName(event.target.value)
    console.log('')
  }

  /**
   * Funktio käsittelee input kentässä tapahtuvan muutokset.
   * @param {Event} event - Event.
   */
  const numberInputChange = (event) => {
    setNumber(event.target.value)
    console.log('')
  }

  /**
   * Funktio käsittelee filtterikentässä tapahtuvat muutokset.
   * @param {Event} event - Event.
   */
  const filterInputChange = (event) => {
    setFilter(event.target.value)
    console.log('')
  }

  return (
    <div>
      <Header text={'Phonebook'} />
      <Notification message={errorMessage} success={isSuccess} />
      <Inputs text={'filter shown with: '} value={newFilter} change={filterInputChange} />
      <form onSubmit={handleSubmit}>
        <Header text={'Add a new'} />
        <Inputs text={'name: '} value={newName} change={nameInputChange} />
        <Inputs text={'number: '} value={newNumber} change={numberInputChange} />
        <Button text={'add'} type={'submit'} />
      </form>
      <Header text={'Numbers'} />
      <ContactRow persons={persons} click={handleDelete} flt={newFilter} />
    </div>
  )
}

export default App