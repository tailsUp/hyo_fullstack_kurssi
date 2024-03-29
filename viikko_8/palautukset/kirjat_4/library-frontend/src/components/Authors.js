import EditAuthors from "./EditAuthor"

const Authors = (props) => {
  if (!props.show) {
    return null
  }

  const authors = props.authors

  return (
    <div>
      <h2>authors</h2>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>born</th>
            <th>books</th>
          </tr>
          {authors.map((a) => (
            <tr key={a.name}>
              <td>{a.name}</td>
              {a.born === 0 && <td>unknown</td>}
              {a.born > 0 && <td>{a.born}</td>}
              <td>{a.bookCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <EditAuthors authors={authors}/>
    </div>
  )
}

export default Authors
