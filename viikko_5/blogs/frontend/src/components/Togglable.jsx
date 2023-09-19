import { useState } from 'react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <br/>
        <button id={props.id} onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div id="divNewBlog2" style={showWhenVisible}>
        {props.children}
        <button id={props.id2} onClick={toggleVisibility}>{props.buttonLabel2}</button>
      </div>
    </div>
  )
}

export default Togglable