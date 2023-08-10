import { useState, useEffect } from 'react';
import axios from 'axios'
import ShowCountries from './ShowCountries'

function App() {

  const [newFilter, setFilter] = useState('')
  const [results, setResults] = useState(null)

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        setResults(response.data)
      }).catch(error => {
        console.log('ERROR IN FETCHING DATA ', error)
      })
  }, [])

  /**
   * Form submit ei ole käytössä. Funktio ei tee muuta kuin estä default tapahtuman kun painetaan show nappulaa.
   */
  const findCountries = (event) => {
    event.preventDefault();
  }

  /**
   * Funktio käsittelee filtter-input kentäss ätapahtuvat muutokset. 
   */
  const handleChange = (event) => {
    setFilter(event.target.value)
  }

  /**
   * Funktio johon tullaan kun show nappulaa on painettu näytöllä.
   * @param {Event} event - Event.
   */
  const handleShow = (event) => {
    event.preventDefault();
    //maaInfo
    const countryName = event.target.id.slice(0, -1) + "Info"
    const tempDiv = document.getElementById(countryName)
    console.log('handleShow painettu', event)
    console.log('')
    setVisibility(tempDiv)
  }

  /**
   * Jos näytöllä on vähemmän kuin 11 maata mutta enemmän kuin 1 niin tämä funktio määrittelee
   * niiden informaation näkymisen kun painetaan show nappulaa.
   * @param {Element} tempDiv - div-element.
   */
  const setVisibility = (tempDiv) => {
    if (tempDiv.style.display === "none") {
      tempDiv.style.display = "block";
    }
    else {
      tempDiv.style.display = "none";
    }
  }

  return (
    <div className="App">
      <form onSubmit={findCountries}>
        <div className="findDiv">
          <label>find countries <input value={newFilter} onChange={handleChange}></input></label>
        </div>
        <div id="resultsDiv">
          <ShowCountries results={results} filter={newFilter.toLowerCase()} buttonFunc={handleShow} />
        </div>
      </form>
    </div>
  );
}

export default App;
