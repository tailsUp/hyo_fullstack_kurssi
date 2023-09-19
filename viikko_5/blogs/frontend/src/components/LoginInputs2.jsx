const LoginInputs2 = (props) => {
  return (
    <div>
      <h2>Log in to application Blogs</h2>
      <form onSubmit={props.click}>
        <div>
          <label>
            username
            <input type="text" value={props.usr} name="Username" onChange={props.changeUSR} />
          </label>
        </div>
        <div>
          <label>
            password
            <input type="password" value={props.psw} name="Password" onChange={props.changePSW} />
          </label>
        </div>
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginInputs2
