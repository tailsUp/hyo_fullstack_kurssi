/**
 * Funktio luo notifikaatio (alert) boxin. Parametri success määrittää sen näytetäänkö
 * error vai success boksi.
 */
const notification = ({ message, success }) => {
  if (message === null || message === '')
  {
    return null
  }
  else
  {
    if (success) {
      return (
        <div className="success">
          {message}
        </div>
      )
    }
    else {
      return (
        <div className="error">
          {message}
        </div>
      )
    }
  }
}

export default notification