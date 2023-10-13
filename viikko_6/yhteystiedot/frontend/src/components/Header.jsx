/**
 * Funktio palauttaa div elementin jonka sisällä on h2 otsikko elementti.
 * @param {String} text     - h2 elementtiin tulevat teksti
 * @returns                 - Element.
 */
const Header = ({text}) => {
    return (
        <div id={"divH2" + text}>
          <h2>{text}</h2>
        </div>
      )
} 

export default Header