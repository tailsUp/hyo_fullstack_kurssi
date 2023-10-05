const ShowUser = ({ user, click }) => {
  return (
    <div>
      <h2>Welcome to Blogs</h2>
      <label>User: {user.username} is logged in. {user._id}</label>
      <p></p>
      <input id='buttonLogout' data-testid='buttonLogout' type="submit" value="*** Logout ***" onClick={click}/>
      <p></p>
    </div>
  )
}

export default ShowUser