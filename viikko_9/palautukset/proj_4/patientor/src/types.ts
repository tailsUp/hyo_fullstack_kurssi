export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: BaseEntry[];
}

export interface DiagnoseEntry {
  code:       string;
  name:       string;
  latin?:     string;
}

export interface DischargeEntry {
  date:       string;
  criteria:   string;
}

export interface SickLeaveEntry {
  startDate:  string;
  endDate:    string;
}

export interface BaseEntry {
  id:                 string;
  description:        string;
  date:               string;
  type:               string;
  specialist:         string;
  diagnosisCodes?:    Array<DiagnoseEntry['code']>;
  discharge?:         DischargeEntry;
  employerName?:      string;
  sickLeave?:         SickLeaveEntry;
  healthCheckRating?: number;
}

export interface NewBaseEntry {
  description:        string;
  date:               string;
  type:               string;
  specialist:         string;
  diagnosisCodes?:    Array<DiagnoseEntry[]>;
  discharge?:         DischargeEntry;
  employerName?:      string;
  sickLeave?:         SickLeaveEntry;
  healthCheckRating?: string;
}

export interface NewHospitalEntry {
  description:        string;
  date:               string;
  type:               string;
  specialist:         string;
  //diagnosisCodes:     Array<DiagnoseEntry[]>;
  diagnosisCodes:     string[];
  discharge:          DischargeEntry;
}

export interface NewOccupationalEntry {
  description:        string;
  date:               string;
  type:               string;
  specialist:         string;
  //diagnosisCodes:     Array<DiagnoseEntry[]>;
  diagnosisCodes:     string[];
  employerName:       string;
  sickLeave:          SickLeaveEntry;
}

export interface NewHealthEntry {
  description:        string;
  date:               string;
  type:               string;
  specialist:         string;
  healthCheckRating:  string;
}

export type PatientFormValues = Omit<Patient, "id" | "entries">;