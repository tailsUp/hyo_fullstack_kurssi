//import { DiagnoseEntry } from "./diagnose";
import { PatientEntry } from "./patient";

//export type NewDiaryEntry = Omit<DiagnoseEntry, 'id'>;

export type NewPatientEntry = Omit<PatientEntry, 'id' | 'entries'>;

export type NonSensitivePatient = Omit<PatientEntry, 'ssn' | 'entries'>;