import Button2 from "./Button2"

const ContactRow = ({persons, click, flt}) => {
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