import { useState } from 'react'

//Viikko 1 --> Tehtävät 1.6 - 1.12

//Selvitys itselle mitä tässä tapahtuu (1.6 alku). Annetaan appille muuttujat good, neutral ja badd. Niiden alkutila on 0.
//Luodaan kolme buttonia "dynaamisesti" kutsumulla funktiota Button (button voidaan luoda myös ns. perinteisesti - kts. funktion Button sisään). 
//Funktio Button ottaa vastaan propsit handleClick ja text, mutta funktiossa käytetään ns. propsien purkamis tekniikka, jolloin käyttöön otetaan 
//suoraan handleClick ja text (olion sisällä). HandleClick annetaan luotavalle buttonille funktioksi ja text buttonin tekstiksi. 

//Tämän jälkeen kommentoitu funktiot, joka tekee koodista helpommin luettavaa.

/**
 * 
 * Funktio luo h2 otsikoita saamansa tekstin (text) peruteella.
 * 
 * @param {String} text - String muotoinen teksti joka sijoitetaan palautettavaan otsikkoon. 
 * @returns html-h2 element.
 */
const Header = ({text}) => {
  return (
    <h2>
      {text}
    </h2>
  )
}

/**
 * 
 * Funktio luo html-button elementin. Tarvitsee parametreinä handleClick (sisältää buttonin click funktio kutsun) ja tekstin (text).
 * 
 * @param {handleClick} handleClick - button elementin onclick vastaava funktion nimi. 
 * @param {String} text - buttoniin asetettava teksti. 
 * @returns html-button element.
 */
const Button = ({ handleClick, text }) => (  
  <button onClick={handleClick}>    
    {text}  
  </button>
)

/**
 * 
 * @param {integer} g - hyvien arvioiden int määrä.
 * @param {integer} n - neutraalien arvioiden int määrä. 
 * @param {integer} b - huonojen arvioiden int määrä. 
 * @returns html div element jonka sisällä kaikki arvioit erotettuina rivin vaihdoilla.
 */
const Statistics = ({g, n, b}) => {
  if(g===0 && n===0 && b===0) 
  {
    return (
      <label>No feedback given</label>
    )
  }
  return (
    <table>
      <tbody>
      <StatisticsLine text='good' value={g} />
      <StatisticsLine text='neutral' value={n} />
      <StatisticsLine text='bad' value={b} />
      <StatisticsLine text='all' value={<All g={g} n={n} b={b}/>} />
      <StatisticsLine text='average' value={<Average g={g} n={n} b={b}/>} />
      <StatisticsLine text='positive' value={<Positive g={g} n={n} b={b}/>} />
      </tbody>
    </table>
  )
} 

/**
 * 
 * Funktio palauttaa pöytärivin jonka sisällä on kaksi solua. Soluun yksi menee text ja soluun kaksi menee value.
 * 
 * @param {String} - text.
 * @param {integer} - value. 
 * @returns html td elementin jonka sisällä kaksi solua.
 */
const StatisticsLine = ({ text, value }) => (
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>
)

/**
 * 
 * Funktio palauttaa palautteiden kpl määrän.
 * 
 * @param {integer} g - hyvät palautteet.
 * @param {integer} n - neutraalit palautteet.
 * @param {integer} b - huonot palautteet.
 * @returns html element label joka sisältää summan.
 */
const All = ({g, n, b}) => {
  return (
    <label>{g + n + b}</label>
  ) 
}

/**
 * 
 * Funktio palauttaa palautteiden keskiarvon (g = 1, n = 0, b = -1). Jos kaikki arvot ovat nolla palautetaan nolla.
 * 
 * @param {integer} g - hyvät palautteet.
 * @param {integer} n - neutraalit palautteet.
 * @param {integer} b - huonot palautteet.
 * @returns html element label joka sisältää keskiarvon.
 */
const Average = ({g, n, b}) => {
  if(g===0 && n===0 && b===0) 
  {
    return (
      <label>0</label>
    )
  }
  return (
    <label><Pyorista nro={(g - b)/(g + n + b)} /></label>
    /*<label>{(g - b)/(g + n + b)}</label>*/
  )
}

/**
 * 
 * Funktio palauttaa palautteiden positiivisen suhdeluvun (g = 1, n = 0, b = -1).
 * 
 * @param {integer} g - hyvät palautteet.
 * @param {integer} n - neutraalit palautteet.
 * @param {integer} b - huonot palautteet.
 * @returns html element label, jonka sisällä positiivnen suhdeluku palautteista.
 */
const Positive = ({g, n, b}) => {
  if(g===0 && n===0 && b===0) 
  {
    return (
      <label>0</label>
    )
  }
  return (
    <label><Pyorista nro={(g / (g + n + b)) * 100}/> %</label>
    /*<label>{(g / (g + n + b)) * 100} %</label>*/
  )
}

/**
 * 
 * Funktio pyöristää desimaalin. Jos pyöristys tarkitusta halutaan muuttaa niin toFixed(XXX) sisällä olevaa numeroa pitää muuttaa.
 * 
 * @param {integer} nro - numero joka pyöristetään desimaalin tarkkuudella. 
 * @returns palauttaa pyöristetyn desimaalin.
 */
const Pyorista = ({nro}) => 
{
  return (
    Number(nro).toFixed(1)
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral= () =>
    setNeutral(neutral + 1)

  const handleBad= () =>
    setBad(bad + 1)

  return (
    <div>
      <Header text='give feedback'/>
      <div>
        <Button handleClick={handleGood} text='good' />        
        <Button handleClick={handleNeutral} text='neutral' />
        <Button handleClick={handleBad} text='bad' />
      </div>
      <Header text='statistic'/>
      <Statistics g={good} n={neutral} b={bad}/>
    </div>
  )
}

export default App