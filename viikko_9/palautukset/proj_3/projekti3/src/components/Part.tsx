
import Content from "./Content";
const Part = (props: { courses: any[]; }) => {
    const basic: any[]      = [];
    const group: unknown[]      = [];
    const background: unknown[] = [];
    const _courses = props.courses.forEach((_course) => {
        switch(_course.kind) {
            case 'basic':
                console.log('ASD');
                basic.push(_course);
                break;
            case 'group':
                group.push(_course);
                break;
            case 'background':
                background.push(_course);
                break;
            default:
                break;
        }
    });
    console.log('COURSES: ', _courses);
    console.log(basic);
    return (
        <div>
            <b>basic</b>
            <Content courses={basic}/>
            <b>group</b>
            <Content courses={group}/>
            <b>background</b>
            <Content courses={background}/>
        </div>
    );
};

export default Part;
