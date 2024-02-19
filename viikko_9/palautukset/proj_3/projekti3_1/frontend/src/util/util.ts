import { Entry, Visibility, Weather } from "../interfaces/interface";

/**
 * Funktio palauttaa uuden id:n uudelle kirjaukselle.
 * @param list -
 * @returns 
 */
export const GetNewID = (list: Entry[]): number => {
    let ID = 0;

    list.map((_obj) => {
        if(_obj.id > ID) {
            ID = _obj.id + 1;
        }
    });
    return ID;
};

export const ReturnEnumWeather = (_string: string): Weather => {
    console.log('Palautetaan sää ENUM');
    const temp = _string as keyof typeof Weather;
    return Weather[temp];
}

export const ReturnEnumVisibility = (_string: string): Visibility => {
    console.log('Palautetaan näkyvyys ENUM');
    const temp = _string as keyof typeof Visibility;
    return Visibility[temp];
}