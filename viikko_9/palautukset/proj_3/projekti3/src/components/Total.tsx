interface TotalProps {
    courses: CourseObject[];
}

interface CourseObject {
    name:           string,
    exerciseCount:  number;
}

const Total = (props: TotalProps) => {
    const totalExercises = props.courses.reduce((sum, part) => sum + part.exerciseCount, 0);
    return(<p>Number of exercises {totalExercises}</p>);
};

export default Total;