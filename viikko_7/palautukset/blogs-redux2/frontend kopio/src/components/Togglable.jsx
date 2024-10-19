import { useState, useImperativeHandle, forwardRef } from 'react'
import PropTypes from 'prop-types'

/**
 * FUnktio palauttaa elementin jonka näkyvyyttä voidaan vaihdella.
 */
const Togglable = forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return {
      toggleVisibility
    }
  })

  return (
    <div>
      <div style={hideWhenVisible}>
        <br />
        <button id={props.id} onClick={toggleVisibility}>{props.buttonLabel}</button>
      </div>
      <div id="divNewBlog2" style={showWhenVisible} className="togglableContent">
        {props.children}
        <button id={props.id2} onClick={toggleVisibility}>{props.buttonLabel2}</button>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  buttonLabel2: PropTypes.string.isRequired
}

export default Togglable