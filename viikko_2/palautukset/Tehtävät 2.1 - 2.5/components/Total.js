const Total = ({course}) => {
  console.log("component: Total", course)
  let nro = 0
  for(let j=0;j<course.parts.length;j++) {
    nro = course.parts.reduce((start, add) => start + add.exercises, 0)
    console.log('kurssien harjoituksien määrä: ', {nro})
  }
  return (
    <div>
      <strong>total of {nro} exercises</strong>
    </div>
  )
}

export default Total