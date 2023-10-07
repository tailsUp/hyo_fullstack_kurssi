/**
 * funktio luo tietokannan mukaisen kontakti-olion ilman id arvoa ja palauttaa sen.
 * @param {String} name     - name.
 * @param {String} number   - number. 
 * @returns 
 */
const NewPerson = (newName, newNumber) => {
    return {
        name: newName,
        number: newNumber
    }
}

export default NewPerson