//import Content from "./components/Content";
import Header from "./components/Header";
import Part from "./components/Part";
//import Total from "./components/Total";

const App = () => {
  const courseName = "Half Stack application development";
  /*const courseParts = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];*/

  interface CoursePartBase {
    name: string;
    exerciseCount: number;
  }
  
  interface CourseDescription {
    description: string;
  }

  /*interface CoursePartBasic extends CoursePartBase {
    description: string;
    kind: "basic"
  }*/
  
  interface CoursePartBasic extends CoursePartBase, CourseDescription{
    kind: "basic"
  }

  interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group"
  }
  
  interface CoursePartBackground extends CoursePartBase, CourseDescription {
    backgroundMaterial: string;
    kind: "background"
  }

  /*interface CoursePartBackground extends CoursePartBase {
    description: string;
    backgroundMaterial: string;
    kind: "background"
  }*/
  
  type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CourseDescription;

  const courseParts: CoursePart[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10,
      description: "This is an awesome course part",
      kind: "basic"
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7,
      groupProjectCount: 3,
      kind: "group"
    },
    {
      name: "Basics of type Narrowing",
      exerciseCount: 7,
      description: "How to go from unknown to string",
      kind: "basic"
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14,
      description: "Confusing description",
      backgroundMaterial: "https://type-level-typescript.com/template-literal-types",
      kind: "background"
    },
    {
      name: "TypeScript in frontend",
      exerciseCount: 10,
      description: "a hard part",
      kind: "basic",
    },
  ];

  return (
    <div>
      <Header courseName={courseName} />
      <Part courses={courseParts}/>
    </div>
  )

  /*return (
    <div>
      <Header courseName={courseName} />
      <Content courses={courseParts}/>
      <Total courses={courseParts}/>
    </div>
  )*/

  //const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0);

  /*return (
    <div>
      <h1>{courseName}</h1>
      <p>
        {courseParts[0].name} {courseParts[0].exerciseCount}
      </p>
      <p>
        {courseParts[1].name} {courseParts[1].exerciseCount}
      </p>
      <p>
        {courseParts[2].name} {courseParts[2].exerciseCount}
      </p>
      <p>
        Number of exercises {totalExercises}
      </p>
    </div>
  );*/
};

export default App;