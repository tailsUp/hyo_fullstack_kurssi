const HEADER_1 = 'Diary entries';

const ListEntries = ( _props ) => {
    
    if(_props.entries.length === 0 || _props.entries === undefined) 
    {
        return (
            <div>
                <h2>{HEADER_1}</h2>
                <div>
                    <label>There are no entries in the flight log.</label>
                </div>
            </div>
        )
    }

    return (
        <div>
            <h2>{HEADER_1}</h2>
            <div id="divEntries">
                {_props.entries.map((_e) => (
                    <div key={_e.id}>
                        <h4>{_e.date}</h4>
                        <div>
                            <div>
                                <label>weather: {_e.weather}</label>
                            </div>
                            <div>
                                <label>visibility: {_e.visibility}</label>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ListEntries;
