/**
 * Funktio palauttaa Buttonin jolle voidaan antaa tyyppi, mutta ei actionia.
 * @param {String} text - Buttoniin tuleva teksti.
 * @param {String} type - Buttonin tyyppi.
 * @returns button.
 */
const Button = ({ text, type }) => (
    <div>
        <button type={type}>
            {text}
        </button>
    </div>
)

export default Button