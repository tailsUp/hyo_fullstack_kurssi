import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = [...useSelector(state => state.notification)]
  console.log('NOTIFICATION ', JSON.parse(JSON.stringify(notification)))
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  if(notification.length > 0 )
  {
    return (
      <div>
        <div style={style}>
          <label>{notification}</label>
        </div>
        <br />
      </div>
    )
  }
  else
  {
    return (<div></div>)
  }
}

export default Notification

/*
const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
    </div>
  )
}

export default Notification
*/