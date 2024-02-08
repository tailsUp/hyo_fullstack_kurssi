const Recommend = (props) => {

    if (!props.show) {
        return null
      }

    if(props.genre === null || props.genre === undefined || props.genre === '')
    {
        return (
            <div>
                user has no prefered genres. Cant make any recommendations.
            </div>
        )
    }

    if(props.books === null || props.books === undefined || props.books.length === 0)
    {
        return (
            <div>
                Book database is EMPTY.
            </div>
        )
    }

    const _filtered = props.books.map((_b) => _b.genres.includes(props.genre) && _b)

    return (
        <div>
        <h3>Recommendations</h3>
        <p>Books in your favorite genre <b>{props.genre}</b></p>
        <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {_filtered.map((a) => {
            if(a !== false)
            {
              return (
                <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
              </tr>
              )
            }
          })}
        </tbody>
      </table>
        </div>
    )
}

export default Recommend
