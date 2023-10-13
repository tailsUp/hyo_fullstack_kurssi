/**
 * Funktio palauttaa dive elementin jonka sisällä on input elementti. 
 * @param {String} text     - Elementissä lukeva teksti. 
 * @param {String} value    - Elemntille annettava arvo.
 * @param {Function} f_call - Kutsuttavan funktion nimi.
 * @returns                 - Element.
 */
const Inputs = ({text, value, change}) => (
    <div>
        <label>
            {text}
            <input value={value} onChange={change} />  
        </label>
    </div>
)

export default Inputs