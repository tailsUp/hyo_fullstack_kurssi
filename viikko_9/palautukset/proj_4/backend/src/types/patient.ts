export interface Entry {
}

export interface PatientEntry {
    id:          string;
    name:        string;
    dateOfBirth: string;
    gender:      string;
    occupation:  string;
    ssn :        string;
    entries:     Entry[];
}

export interface PatientEntrySSN {
    id:          string;
    name:        string;
    dateOfBirth: string;
    gender:      string;
    occupation:  string;
}
