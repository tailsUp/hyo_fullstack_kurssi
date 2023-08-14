import Button2 from "./Button2"

const tyhja = () => {
    return (
        <div>
            <label>Database is empty</label>
        </div>
    )
}

const ContactRow = ({persons, click, flt}) => {
    if(persons === undefined || persons === null || persons.length === 0 || !persons) {
        return tyhja()
    }
    if(flt === undefined || flt === '') {
        return (
            <div>
                {persons.map(person => 
                    <div key={person.id}>
                        <label id={'label' + person.id}>
                            {person.name} {person.number}
                            <Button2 text={'delete'} id={person.id} click={click}/>
                        </label>
                    </div>
                )}
            </div>
        )
    }
    else 
    {
        flt = flt.toLowerCase()
        let temp = persons.filter(p => p.name.toLowerCase().includes(flt));
        return (
            <div>
                {temp.map(person => 
                    <div key={person.id}>
                        <label id={'label' + person.id}>
                            {person.name} {person.number}
                            <Button2 text={'delete'} id={person.id} click={click}/>
                        </label>
                    </div>
                )}
            </div>
        )
    }


}


export default ContactRow