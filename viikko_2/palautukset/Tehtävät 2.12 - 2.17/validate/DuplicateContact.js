const DuplicateContact = (compare, persons) => {
    console.log('Search for cantact with name: ', compare)
    const duplicate = persons.find(person => person.name === compare)
    return duplicate;
}

export default DuplicateContact