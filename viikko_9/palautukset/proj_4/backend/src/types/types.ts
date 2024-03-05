//import { DiagnoseEntry } from "./diagnose";
import { BaseEntry } from "./diagnose";
import { PatientEntry } from "./patient";

//export type NewDiaryEntry = Omit<DiagnoseEntry, 'id'>;

export type NewPatientEntry = Omit<PatientEntry, 'id' | 'entries'>;

export type NonSensitivePatient = Omit<PatientEntry, 'ssn' | 'entries'>;

export type NewBaseEntry = Omit<BaseEntry, 'id' >;

export type NewBaseEntryBasic = Omit<BaseEntry, 'id'| 'healthCheckRating' | 'diagnosisCodes' | 'discharge' | 'sickLeave' >;

//export type NewHospitalEntry = Omit<HospitalEntry, 'id'>;