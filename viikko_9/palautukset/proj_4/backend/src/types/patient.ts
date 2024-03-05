import { BaseEntry } from "./diagnose";

export interface Entry {
}

export interface Patient {
    id:          string;
    name:        string;
    dateOfBirth: string;
    gender:      Gender;
    occupation:  string;
    ssn :        string;
    entries:     BaseEntry[];
}

export interface PatientEntry {
    id:          string;
    name:        string;
    dateOfBirth: string;
    gender:      string;
    occupation:  string;
    ssn :        string;
    entries:     BaseEntry[];
}

export interface PatientEntrySSN {
    id:          string;
    name:        string;
    dateOfBirth: string;
    gender:      string;
    occupation:  string;
}

export enum Gender {
    Male    = 'male',
    Female  = 'female',
    Other   = 'other',
}