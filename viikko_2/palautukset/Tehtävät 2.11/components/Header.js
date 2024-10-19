/**
 * Funktio palauttaa h2 elementin tekstillä joka on muuttujan nimi sisällä.
 * @param {String} nimi - nimi. 
 * @returns h2.
 */
const Header = ({nimi}) => {
    console.log("component: Header", {nimi});
    return (
      <div>
        <h2>{nimi}</h2>
      </div>
    )
}

export default Header