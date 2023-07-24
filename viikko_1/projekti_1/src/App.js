import { useState } from 'react'

//Viikko 1 --> Tehtävät 1.12 - 1.14

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
 * Funktio asettaa näytölle sattumanvaraisen fraasin saamansa nro perusteella.
 * 
 * @param {Array} lista1 - taulukko sisältää kaikki anekdootit.
 * @param {Array} lista2 - taulukko sisältää kaikki äänet.
 * @param {Integer} nro - vuorossa oleva numero.
 * @returns 
 */
const Anekdotit = ({lista1, lista2, nro}) => {
  return (
    <div>
      <label>{lista1[nro]}</label>
      <br/>
      <label>has {lista2[nro]} votes</label>
    </div>
  )
}

/**
 * 
 * Funktio palauttaa elementin jonka sisällä on fraasi joka on saanut eniten (tai saman verran) ääniä.
 * 
 * @param {Array} lista1 - taulukko sisältää kaikki anekdootit.
 * @param {Array} lista2 - taulukko sisältää kaikki äänet.
 * @returns html div jossa sisältönä label elementtejä.
 */
const EnitenAania = ({lista1, lista2}) => {
  const copy = [...lista2]
  const max = Math.max(...copy);
  const nro = copy.indexOf(max)
  if(nro > -1) {
    return (
      <div>
        <label>{lista1[nro]}</label>
        <br/>
        <label>has {lista2[nro]} votes</label>
      </div>
    )
  }
  return (
    <div>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]


  let initialVotes = Array(anecdotes.length).fill(0)

  const [selected, setSelected] = useState(0)
  const [allVotes, setVotes] = useState(initialVotes)

  /**
   * Funktio luo uuden sattumanvaraisen numeron väliltä 0 - anekdoottilistan pituus. Tämän jälkeen
   * anekdoottilistalta otetaan käsittelyyn sattumanvaraista numeroa vastaava fraasi.
   */
  const handleNext = () => {
    const uusiNro = Math.floor(Math.random() * (anecdotes.length - 0)) + 0;
    console.log(uusiNro)
    setSelected(uusiNro)
  }

  /**
   * Funktio tekee kopion äänestyslistasta ja kasvattaa valitun anekdootin äänimäärää yhdellä.
   * Tämän jälkeen kopio sijoitetaan takaisin alkuperäiseen taulukkoon.
   */
  const handleVote = () => {
    console.log('Äänet ennen korotusta', allVotes[selected])
    const copy = [...allVotes]
    copy[selected] += 1
    setVotes(copy)
    console.log('Äänet korotuksen jälkeen' , allVotes[selected])
  }

  return (
    <div>
      <Header text='Anecdote of the day' />
      <Anekdotit lista1={anecdotes} lista2={allVotes} nro={selected}/>
      <br/>
      <Button handleClick={handleVote} text='vote' />
      <Button handleClick={handleNext} text='next anecdote' />
      <Header text='Anecdote with most votes' />
      <EnitenAania lista1={anecdotes} lista2={allVotes}/> 
    </div>
  )
}

export default App