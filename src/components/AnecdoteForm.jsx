const AnecdoteForm = (props) => {

  const onCreate = (event) => {
    event.preventDefault()
    const c = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.add(c)
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
