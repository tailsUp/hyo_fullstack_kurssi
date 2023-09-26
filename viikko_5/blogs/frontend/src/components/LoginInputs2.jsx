import PropTypes from 'prop-types'

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

LoginInputs2.propTypes = {
  click: PropTypes.func.isRequired,
  changeUSR: PropTypes.func.isRequired,
  changePSW: PropTypes.func.isRequired,
  usr: PropTypes.string.isRequired,
  psw: PropTypes.string.isRequired
}

export default LoginInputs2
