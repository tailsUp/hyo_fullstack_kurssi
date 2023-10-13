/**
 * Funktio tutkii löytyykö persons listalta yhteystieto (compare).
 * @param {String} compare  - Nimi jota verrataan listalla oleviin nimiin.
 * @param {Array} persons   - Lista jolta nimeä etsitään.
 * @returns
 */
const DuplicateContact = (compare, persons) => {
  if(persons === undefined || persons === false || persons === null || persons.length === 0)
  {
    return undefined
  }
  else
  {
    console.log('Search for cantact with name: ', compare)
    const duplicate = persons.find(person => person.name === compare)
    return duplicate
  }
}

export default DuplicateContact