/**
 * Funktio palauttaa div elementin jonka sisällä on button elementti.
 * Tätä button funktiota tulee käyttää silloin kun buttonille halutaan antaa funktio.
 * 
 * @param {String} text     - Buttonille annettava teksti.
 * @param {Type} type       - Buttonille määriteltävä tyyppi (esim. submit). 
 * @param {Function} click  - Funktio joka suoritetaan kun buttonia painettu.
 * @returns 
 */
const Button2 = ({ text, id, click }) => (
    <button id={id} onClick={click}>
        {text}
    </button>
)

export default Button2