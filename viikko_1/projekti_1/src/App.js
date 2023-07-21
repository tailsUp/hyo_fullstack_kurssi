const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header kurssi={course}/>
      <Content osa1={part1} osa2={part2} osa3={part3} nro1={exercises1} nro2={exercises2} nro3={exercises3}/>

      <Total nro1={exercises1} nro2={exercises2} nro3={exercises3}/>
    </div>
  )
}

const Header = (props) => {
  console.log("Header sisällä!");
  return (
    <div>
      <h1>{props.kurssi}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log("Content sisällä!");
  return (
    <div>
      <p>
        {props.osa1} {props.nro1}
      </p>
      <p>
      {props.osa2} {props.nro2}
      </p>
      <p>
      {props.osa3} {props.nro3}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log("Total sisällä!");
  return (
    <div>
      <p>Number of exercises {props.nro1 + props.nro2 + props.nro3}</p>
    </div>
  )
}
export default App