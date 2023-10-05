const LoginInputs = ({ click, usr, psw, changeUSR,changePSW }) => {
  return (
    <div>
      <h2>Log in to application Blogs</h2>
      <form onSubmit={click}>
        <div>
          <label>
            username
            <input id="inputUsername" type="text" value={usr} name="Username" onChange={changeUSR} />
          </label>
        </div>
        <div>
          <label>
            password
            <input id="inputPassword" type="password" value={psw} name="Password" onChange={changePSW}/>
          </label>
        </div>
        <button id="buttonLogin" type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginInputs