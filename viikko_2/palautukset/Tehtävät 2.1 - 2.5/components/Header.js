const Header = ({nimi}) => {
    console.log("component: Header", {nimi});
    return (
      <div>
        <h1>{nimi}</h1>
      </div>
    )
}

export default Header