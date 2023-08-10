/**
 * 
 * Funktio asettaa kaikki listalla olevat nimet näytölle. Jos muuttujassa flt on jokin arvo niin näytetään näytöllä kaikki ne nimet (ja numerot)
 * jotka sisältävät flt:n.
 * 
 * @param {Array} persons - taulukko nimiä 
 * @param {String} flt - taulukko nimiä 
 * @returns - kaikki nimet listattuna (<div><p>)
 */
const SetNames = ({persons, flt}) => {
    console.log("component: SetNames ", persons, flt)
    let result = ''
    if(flt === '') {
        result = persons.map(p =>
            <div key={'div' + p.name}>
                <label key={p.name + p.number}>{p.name} {p.number}</label>
            </div>
        )
    } else {
        flt = flt.toLowerCase()
        let temp = persons.filter(p => p.name.toLowerCase().includes(flt));
        result = temp.map(p => 
            <div key={'div' + p.name}>
                <label key={p.name + p.number}>{p.name} {p.number}</label>
            </div>
        )
    }

    return (
      <div>
        {result}
      </div>
    )
  }
  
  export default SetNames