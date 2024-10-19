const Course = ({ course }) => {
    console.log("component: Course", course)
    const result = course.parts.map(c =>
        <p key={c.id}>{c.name} {c.exercises}</p>
      )
    return (
        <div>
            {result}
        </div>
    )
}
  
export default Course