const Genres = (props) => {

    if(props.genres === null || props.genres === undefined || props.genres.length === 0)
    {
        return (
            <div>
                There are no genres to display. Try adding a book with a genre to database.
            </div>
        )
    }

    return (
        <div>
            {props.genres.map((_g) => (
                <button key={_g} onClick={() => props.selectByGenre(_g)}>{_g}</button>
            ))}
            <button onClick={() => props.selectByGenre('clear')}>clear</button>
        </div>
    )
}

export default Genres
