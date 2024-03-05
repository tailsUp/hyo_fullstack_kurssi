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
    specialist:         string;
    type:               string;
    diagnosisCodes?:    Array<DiagnoseEntry['code']>;
    discharge?:         DischargeEntry;
    employerName?:      string;
    sickLeave?:         SickLeaveEntry;
    healthCheckRating?: number;
}

export interface SaveBaseEntry {
    id:                 string;
    description:        string;
    date:               string;
    specialist:         string;
    type:               string;
    diagnosisCodes:     string[];
    discharge:          DischargeEntry;
    employerName:       string;
    sickLeave:          SickLeaveEntry;
    healthCheckRating:  number;
}

export interface HospitalEntry {
    id:                 string;
    description:        string;
    date:               string;
    specialist:         string;
    type:               string;
    diagnosisCodes?:    Array<DiagnoseEntry[]>;
    discharge?:         DischargeEntry;
}

export interface NewHospitalEntry {
    description:        string;
    date:               string;
    specialist:         string;
    type:               string;
    diagnosisCodes:     string[];
    discharge:          DischargeEntry;
}

export interface OccupationalEntry {
    id:                 string;
    description:        string;
    date:               string;
    specialist:         string;
    type:               string;
    diagnosisCodes?:    Array<DiagnoseEntry[]>;
    employerName?:      string;
    sickLeave?:         SickLeaveEntry;
}

export interface NewOccupationalEntry {
    description:        string;
    date:               string;
    specialist:         string;
    type:               string;
    diagnosisCodes:     string[];
    employerName:       string;
    sickLeave:          SickLeaveEntry;
}

export interface HealthEntry {
    id:                 string;
    description:        string;
    date:               string;
    specialist:         string;
    type:               string;
    healthCheckRating?: number;
}

export interface NewHealthEntry {
    description:        string;
    date:               string;
    specialist:         string;
    type:               string;
    healthCheckRating:  number;
}