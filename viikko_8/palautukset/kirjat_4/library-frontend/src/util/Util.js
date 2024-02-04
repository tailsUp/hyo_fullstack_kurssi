export const createSelect = (authors) => {
    const x = []
    //x.push({ value: 'SELECT AUTHOR', label: 'SELECT AUTHOR' })
    authors.forEach(_a => {
        x.push({ value: _a.name, label: _a.name })
    });
    return x
}

export const pullGenresFromBooks = (books) => {

}