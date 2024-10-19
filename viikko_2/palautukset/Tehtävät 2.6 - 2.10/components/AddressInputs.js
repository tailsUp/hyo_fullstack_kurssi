/**
 * Funktio palauttaa input kentän henkilön yhteystietoja varten.
 * @param {String} text     - input kenttää edeltävä teksti.
 * @param {String} value    - input kentän value.
 * @param {String} change   - input kentän onChange.
 * @returns inputkenttä.
 */
const AddressInputs = ({ text, value, change}) => (
    <div>
        <label>
            {text}
            <input value={value} onChange={change} />  
        </label>
    </div>
)

export default AddressInputs