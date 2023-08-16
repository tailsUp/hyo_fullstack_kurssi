/**
 * Funktio palauttaa vahvistus ikkunan annetun viestin kanssa.
 * @param {String} message  - Ikkunaan tuleva viesti.
 * @param {Boolean} success - Määrittää mikä ikkuna palautetaan. 
 * @returns 
 */
const Notification = ({ message, success }) => {
    if (message === null || message === '') {
        return null
    } 
    else
    {
        if(success) 
        {
            return (
                <div className="success">
                    {message}
                </div>
            )
        }
        else 
        {
            return (
                <div className="error">
                    {message}
                </div>
            )
        }
    }
}

export default Notification