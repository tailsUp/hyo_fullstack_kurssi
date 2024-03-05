import data from '../data/patients';
import { PatientEntry, PatientEntrySSN } from '../types/patient';
import { BaseEntry, NewHealthEntry, NewHospitalEntry, NewOccupationalEntry } from '../types/diagnose';
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
    if(_p.id === ID) {
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
const excludeSSN = (patients: PatientEntry[]): PatientEntrySSN[] => {
  const temp: PatientEntrySSN[] = [];
  patients.forEach(_p => {
    const {...t} = _p;
    temp.push(t);
  });
  return temp;
};

const addPatient = ( entry: NewPatientEntry ): PatientEntrySSN => {
  console.log('service ADD NEW PATIENT!');
  const id = uuid();
  const entries: BaseEntry[] = [];
  const newPatientEntry = {id, entries, ...entry  };

  patients.push(newPatientEntry);
  return newPatientEntry;
};

const addEntryToPatient = (entry: NewHospitalEntry | NewOccupationalEntry | NewHealthEntry, patientID: string ): boolean => {
  console.log('ADD ENTRY for PATIENT: ');
  const _patient = getPatientWithID(patientID);
  if(_patient !== undefined)
  {
    const _new = {id: uuid(), ...entry};
    _patient.entries.push(_new);
    return true;
  }
  return false;
};

const getPatientWithID = (ID: string) => {
  const _patient = patients.find(d => d.id === ID);
  return _patient;
};

export default {
  getEntries,
  addPatient,
  getEntryByID,
  addEntryToPatient
};
