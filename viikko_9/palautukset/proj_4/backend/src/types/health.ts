import { PatientEntry } from "./patient";

export enum HealthCheckRating {
    "Healthy" = 0,
    "LowRisk" = 1,
    "HighRisk" = 2,
    "CriticalRisk" = 3
}
  
export interface HealthCheckEntry extends PatientEntry {
    type: "HealthCheck";
    healthCheckRating: HealthCheckRating;
}

export interface HospitalEntry extends PatientEntry {
    type: "HospitalEntry";
    healthCheckRating: HealthCheckRating;
}

export interface OccupationalHealthcareEntry extends PatientEntry {
    type: "OccupationalHealthcareEntry";
    healthCheckRating: HealthCheckRating;
}

export type Entry = | HospitalEntry | OccupationalHealthcareEntry | HealthCheckEntry;

/*

Now we only need to create the OccupationalHealthcareEntry and HospitalEntry types so we can combine them in a union and export them as an Entry type like this:

*/