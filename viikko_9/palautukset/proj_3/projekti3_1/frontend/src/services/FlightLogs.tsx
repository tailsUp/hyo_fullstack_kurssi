import axios from "axios";
import { Entries, EntryPlus } from "../interfaces/interface";
import { API_GET_LOGS, API_POST_LOG } from "../constants/constant";

/**
 * Funktiota käytetään kaikkien lentolokien hakuun tietokannasta.
 * @returns data.
 */
const getAllFlightLogs = async () => {
    const { data } = await axios.get<Entries[]>(API_GET_LOGS);
    return data;
  };
  
  /**
   * Funktiota käytetään uuden lentolokin lisäämisen tietokantaan.
   * @param object - Entry.
   * @returns data.
   */
  const createFlighLogEntry = async (object: EntryPlus) => {
    const { data } = await axios.post<EntryPlus>(API_POST_LOG, object);    
    return data;
  };

  export default {
    getAllFlightLogs, createFlighLogEntry
  };
  