<<<<<<< HEAD:viikko_6/palautetut/redux-anecdotes2/src/components/Notification.js
const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
=======
/* eslint-disable react/prop-types */
const Notification = (props) => {
  const style = {border: 'solid', padding: 10, borderWidth: 1, marginBottom: 5}
  
  console.log('Visible ', props.visible)

  if (!props.visible) return null

  if (props.showText === null || props.showText === undefined || props.showText === '' ) return null

  return (
    <div style={style}>
      <span>{props.showText}</span>
>>>>>>> 2572eed (Viikon viimeinen projekti sisään.):src/components/Notification.jsx
    </div>
  )
}

export default Notification