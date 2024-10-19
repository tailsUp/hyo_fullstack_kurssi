//Viikko 1 --> tehtävät 1.3 - 1.5

const Header = (props) => {
  console.log("Header sisällä!");
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Part1 = (props) => {
  console.log("Part1 sisällä!");
  return (
      <p>{props.osa1} {props.nro1}</p>
  )
}
const Part2 = (props) => {
  console.log("Part2 sisällä!");
  return (
    <p>{props.osa2} {props.nro2}</p>
  )
}
const Part3 = (props) => {
  console.log("Part3 sisällä!");
  return (
    <p>{props.osa3} {props.nro3}</p>
  )
}

const Content = (props) => {
  console.log("Content sisällä!");
  return (
    <div>
      <Part1 osa1={props.lista[0].name} nro1={props.lista[1].exercises}/>
      <Part2 osa2={props.lista[1].name} nro2={props.lista[1].exercises}/>
      <Part3 osa3={props.lista[2].name} nro3={props.lista[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  console.log("Total sisällä!");
  return (
    <div>
      <p>Number of exercises {props.lista[0].exercises + props.lista[1].exercises + props.lista[2].exercises}</p>
    </div>
  )
}

//Javascript 1.5
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header kurssi={course.name}/>
      <Content lista={course.parts}/>
      <Total lista={course.parts}/>
    </div>
  )
}

export default App