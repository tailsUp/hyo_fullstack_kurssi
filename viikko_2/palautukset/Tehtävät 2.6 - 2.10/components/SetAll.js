import Course from "./Course"
import Header from "./Header"
import Total from "./Total"

const SetAll = ({courses}) => {
    console.log("component: SetAll", courses)
    const result = courses.map(c =>
        <div key={'div' + c.id}>
            <Header key={'header' + c.id} nimi={c.name} />
            <Course key={'course' + c.id} course={c} />
            <Total key={'total' + c.id} course={c} />
        </div>
    )
    return (
        <div>
            {result}
        </div>
    )
}

export default SetAll