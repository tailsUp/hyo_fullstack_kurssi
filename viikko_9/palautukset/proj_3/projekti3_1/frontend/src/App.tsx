//import { useState } from 'react'
import axios from "axios";
import { useEffect, useState } from "react";

//Components:
import ListEntries  from "./components/ListEntries";
import NewEntry     from "./components/NewEntry";
import ShowError    from "./components/ShowError";
//Other:
import FlightLogs                 from "./services/FlightLogs";
import { API_GET_LOGS, API_PING } from './constants/constant';
import { EntriesBasic }                from "./interfaces/interface";


function App() {

  const [entries, setEntries] = useState<EntriesBasic[]>([]);
  const [error, setError]              = useState(''); 

  /**
   * Funktiota käytetään virheviestin esittämisessä ja sen tyhjentämisessä 10 sek jälkeen.
   * @param message 
   */
  const notify = (message: string): void => {
    setError(message)
    setTimeout(() => {
      setError('')
    }, 10000)  
  }

  /**
   * Hakee lentolokit.
   */
  const getFlightLogs = async () => {
    await FlightLogs.getAllFlightLogs().then(_r => {
      console.log(_r);
      setEntries(_r);
    })
  };

  /**
   * Kutsutaan kun sivu ladataan auki ensimmäisellä kerralla.
   */
  useEffect(() => {
    console.log('Kutsutaan flight-log backendia osoitteessa: ', API_GET_LOGS);
    void axios.get<void>(API_PING);
    void getFlightLogs();
  }, []);

  return (
      <div>
        <ShowError showError={error}/>
        <NewEntry notify={notify} entries={entries} getFlights={getFlightLogs}/>
        <ListEntries entries={entries}/>
      </div>
  )
}

export default App
