export enum Weather {
    Sunny   = 'sunny',
    Rainy   = 'rainy',
    Cloudy  = 'cloudy',
    Stormy  = 'stormy',
    Windy   = 'windy',
}

export enum Visibility {
    Great   = 'great',
    Good    = 'good',
    Ok      = 'ok',
    Poor    = 'poor',
}

export const x = () => {
    return Object.keys(Visibility);
}

export interface Entry {
    id:         number;
    date:       string;
    weather:    Weather;
    visibility: Visibility;
}

export interface EntryPlus {
    id:         number;
    date:       string;
    weather:    Weather;
    visibility: Visibility;
    comment:    string;
}

export interface EntriesBasic {
    entries: Entry[];
}

export interface Entries {
    entries: Entry[] | EntryPlus[];
}

export interface NewEntry {
    date:       string;
    weather:    Weather;
    visibility: Visibility;
    comment:    string;
}
