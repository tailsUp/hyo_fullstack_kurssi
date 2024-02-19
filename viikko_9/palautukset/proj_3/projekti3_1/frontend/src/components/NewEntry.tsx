import { useState } from "react";
import { EntryPlus, Visibility, Weather } from "../interfaces/interface";
import { GetNewID, ReturnEnumVisibility, ReturnEnumWeather } from "../util/util";
import FlightLogs from "../services/FlightLogs";

const NewEntry = ( _props ) => {

    //Haetaan tässä enumit taulukkoon jotta voidaan loopata myöhemmin radiobuttonit helpommin näytölle.
    const weatherArray      = Object.entries(Weather).map(([weather, value]) => ({weather, value}));
    const visibilityArray   = Object.entries(Visibility).map(([visibility, value]) => ({visibility, value}));

    const [newDate, setDate]             = useState('');
    const [newVisibility, setVisibility] = useState('');
    const [newWeather, setWeather]       = useState('');
    const [newComment, setComment]       = useState('');

    /**
     * funktiota käytetään uuden kirjauksen luontiin tietokantaan. Jos virhe niin välitetään tieto käyttäjälle.
     * @param event 
     */
    const submit = async (event: React.ChangeEvent<unknown>) => {
        event.preventDefault();
        console.log('Lisätään uusi Entry tietokantaan!');
        console.log(newDate, newVisibility, newWeather, newComment);
        try {
            const _ID = GetNewID(_props.entries);
            const _W = ReturnEnumWeather(newWeather);
            const _V = ReturnEnumVisibility(newVisibility);
            const _new: EntryPlus = {id: _ID, date: newDate.toString(), visibility: _V, weather: _W, comment: newComment};
            await FlightLogs.createFlighLogEntry(_new).then(_n => {
                console.log('new Entry has been succesfully added to flightlog');
                console.log(_n);
                _props.getFlights();
            }).catch((error) => {
                if(error.response.data !== undefined) {
                    console.log(error.response.data);
                    _props.notify(error.response.data);
                }
              })
        } catch (error: unknown) {
            let errorMessage = 'Something went wrong.';
            if (error instanceof Error) {
              errorMessage += ' Error: ' + error.message;
            }
            console.log(errorMessage);
            _props.notify(errorMessage);
        }
    }

    //Pientä tyylittelyä jotta kentät erottuvat paremmin.
    const bold = { fontWeight: 'bold' };
    const normal = { fontWeight: 'normal' };

    return (
        <div id="divNewEntry">
            <h2>Add new entry</h2>
            <form onSubmit={submit}>
                <div>
                    <label style={bold}>Date: <input type='date' onChange={(event) => setDate(event.target.value)}/></label>
                </div>
                <div>
                    <label style={bold}>Visibility:
                        {visibilityArray.map((_v) => (
                            <label key={_v.visibility} style={normal}>{_v.value} 
                                <input type='radio' name='visibilityRadio' value={_v.visibility} onChange={(event) => setVisibility(event.target.value)}/>
                            </label>
                        ))}
                    </label>
                </div>
                <div>
                    <label style={bold}>Weather:
                    {weatherArray.map((_w) => (
                        <label key={_w.weather} style={normal}>{_w.value} 
                            <input type='radio' name='weatherRadio' value={_w.weather} onChange={(event) => setWeather(event.target.value)}/>
                        </label>
                    ))}
                    </label>
                </div>
                <div>
                    <label style={bold}>Comment: <input type='text' placeholder='' onChange={(event) => setComment(event.target.value)}/></label>
                </div>
                <div>
                    <button type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
};

export default NewEntry;