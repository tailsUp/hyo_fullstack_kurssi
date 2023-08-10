const ConfirmNumberChange = (duplicate, newNumber) => {
    const ok = window.confirm(`${duplicate.name} is already in the phonebook, replace the old number with a new one?`)
    if(ok) {
      console.log(`User has decided to update ${duplicate.name} old number: ${duplicate.number} to new number: ${newNumber}`)
    }
}

export default ConfirmNumberChange