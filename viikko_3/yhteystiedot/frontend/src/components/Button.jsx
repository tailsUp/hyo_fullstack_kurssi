/**
 * Funktio palauttaa div elementin jonka sisällä on button elementti.
 * Tätä button funktiota tulee käyttää ensisijaisesti perinteisten 
 * buttoneiden luomiseen.
 * 
 * @param {String} text - Buttonille annettava teksti.
 * @param {Type} type   - Buttonille määriteltävä tyyppi (esim. submit). 
 * @returns 
 */
const Button = ({text, type}) => {
    return (
        <div>
            <button type={type}>{text}</button>
        </div>
    )
}

export default Button