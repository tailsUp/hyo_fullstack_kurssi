import Button2 from "./Button2"

/**
 * Funktio palauttaa tyhjän divin, jotta käyttäjä tietää mitä tapahtuu.
 * @returns 
 */
const emptyRow = () => {
    return (
        <div in="emptyDIV">
            <label>Error in reading database OR the databse is empty.</label>
        </div>
    )
}

/**
 * Funktio luo jokaisen yhteystietorivin, joka sivulla näkyy. Jos saadussa persons listassa on 
 * jotain ongelmia niin palautetaan emptyRow näkymä. 
 * 
 * Jos filtteri on tyhjä palautetaan kaikki rivit ja muussa tapauksessa filtteriä vastaavat rivit.
 * 
 * @param {Array} persons   - Lista yhteystieto olioita. 
 * @param {Function} click  - Funktio joka suoritetaan nappulaa painettaessa. 
 * @param {String} flt      - Filtteri jonka perusteella rivejä suodatetaan. 
 * @returns 
 */
const ContactRow = ({persons, click, flt}) => {
    if(persons === undefined || persons === null || persons === false || persons.length === 0) 
    {
        return emptyRow()
    }
    if(flt === undefined || flt === '') 
    {
        return (
            <div>
                {persons.map(person => 
                    <div key={person.id}>
                        <label id={'label' + person.id}>
                            {person.name} {person.number}
                            <Button2 text={'delete'} id={person.id} click={click}/>
                        </label>
                    </div>
                )}
            </div>
        )
    }
    else 
    {
        flt = flt.toLowerCase()
        let temp = persons.filter(p => p.name.toLowerCase().includes(flt));
        return (
            <div>
                {temp.map(person => 
                    <div key={person.id}>
                        <label id={'label' + person.id}>
                            {person.name} {person.number}
                            <Button2 text={'delete'} id={person.id} click={click}/>
                        </label>
                    </div>
                )}
            </div>
        )
    }
}


export default ContactRow