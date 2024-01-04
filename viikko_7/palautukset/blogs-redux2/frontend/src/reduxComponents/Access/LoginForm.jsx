const LoginForm = ({ submit, changeUSR, changePSW, valueU, valueP }) => {
    return (
        <div>
            <form onSubmit={submit}>
                <div>
                    <label>
                        username
                        <input id="inputUsername" type="text" value={valueU} name="username" onChange={changeUSR} />
                    </label>
                </div>
                <div>
                    <label>
                        password
                        <input id="inputPassword" type="password" value={valueP} name="password" onChange={changePSW} />
                    </label>
                </div>
                <button id="buttonLogin" type="submit">login</button>
            </form>
        </div>
    )
}

export default LoginForm
