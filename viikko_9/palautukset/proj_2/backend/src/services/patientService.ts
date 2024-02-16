import data from '../data/patients';
import { PatientEntry, PatientEntrySSN } from '../types/patient';
import { NewPatientEntry } from '../types/types';
import { v1 as uuid } from 'uuid'; //PITÄÄ ASENTAA TERMINAALISSA.

const patients: PatientEntry[] = data;

const getEntries = (): PatientEntrySSN[] => {
  //return patients;
  return excludeSSN(patients);
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
  const newPatientEntry = {id, ...entry  };

  patients.push(newPatientEntry);
  return newPatientEntry;
  //return null;
};

export default {
  getEntries,
  addPatient
};