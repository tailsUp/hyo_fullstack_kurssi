interface ContentProps {
    courses: CourseObject[];
}

interface CourseObject {
    name:           string,
    exerciseCount:  number;
}

const Content = (props: ContentProps) => {
    //return <h1>{props.course}</h1>;
    const _courses = props.courses;

    return (
        <div>
            {_courses.map((_course: CourseObject) => (
                <p>{_course.name} {_course.exerciseCount}</p>
            ))}
        </div>
    );
};

export default Content;
