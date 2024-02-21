import data from '../data/patients';
import { Entry, PatientEntry, PatientEntrySSN } from '../types/patient';
import { NewPatientEntry } from '../types/types';
import { v1 as uuid } from 'uuid'; //PITÄÄ ASENTAA TERMINAALISSA.

const patients: PatientEntry[] = data;

const getEntries = (): PatientEntrySSN[] => {
  return excludeSSN(patients);
};

/**
 * Funktio käy lävitse kaikki patients muuttujassa olevat oliot ja palauttaa oikean.
 * @param ID - string.
 * @returns - PatientEntrySSN | null
 */
const getEntryByID = (ID: string): PatientEntrySSN | null => {
  let x = null;
  console.log('Etsitään', ID);
  patients.map((_p) => {
    console.log(_p.id); 
    if(_p.id === ID) {
      console.log('JEEEE');
      x = _p;
    }
  });
  return x;
};

/**
 * Funktio poistaa patients listalta ssn propertyn.
 * @param patients 
 * @returns 
 */
/*const excludeSSN = (patients: PatientEntry[]): PatientEntrySSN[] => {
  const temp: PatientEntrySSN[] = [];
  patients.forEach(_p => {
    const {ssn, ...t} = _p;
    temp.push(t);
  });
  return temp;
};*/

/**
 * Funktio poistaa patients listalta ssn propertyn.
 * @param patients 
 * @returns 
 */
const excludeSSN = (patients: PatientEntry[]): PatientEntrySSN[] => {
  const temp: PatientEntrySSN[] = [];
  patients.forEach(_p => {
    const {...t} = _p;
    temp.push(t);
  });
  return temp;
};

/*const addPatient = () => {
  return null;
};*/

const addPatient = ( entry: NewPatientEntry ): PatientEntrySSN => {
  console.log('service');
  const id = uuid();
  const entries: Entry[] = [];
  const newPatientEntry = {id, entries, ...entry  };

  patients.push(newPatientEntry);
  return newPatientEntry;
  //return null;
};

export default {
  getEntries,
  addPatient,
  getEntryByID
};