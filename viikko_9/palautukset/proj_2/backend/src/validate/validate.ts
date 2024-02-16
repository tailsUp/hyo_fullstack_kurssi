import { NewPatientEntry } from "../types/types";

/**
 * Funktio tarkistaa onka annettu muuttuja string. Ei tarkista mahdollisten string olioiden osalta. Ei tarvetta.
 * @param _string unknown.
 * @returns TYPE PREDICATE.
 */
const validateString = (_string: unknown): _string is string => {
    console.log('validate string: ', _string);
    if(typeof _string === 'string' || _string instanceof String) {
        return true;
    }
    return false;
};

/**
 * Funktio muuttaa suomalaisen päivämäärän muotoon vvvv-kk-pp ja palauttaa sen. Ei tarkista onko numeroita, eikä tarkista onko kuukausi muotoa 1 vai 01 jne.
 * @param _date string.
 * @returns string.
 */
/*const convertDate = (_date: string): string => {
    const _split = _date.split('.');
    if(_split.length === 3) {
        if(_split[0].length === 4) {
            return _split[0] + '.' + _split[1] + '.' + _split[2];
        } else if(_split[2].length === 4) {
            return _split[2] + '.' + _split[1] + '.' + _split[0];
        }
        return '';
    }
    return '';
};*/

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
  
const parseDate = (date: string): string => {
    console.log('validate date: ', date);
    if (!date || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

enum GenderEnum { female  = 'female', male    = 'male', other   = 'other' }

/**
 * Funktio tarkistaa saadun merkkijonon enum gender versioihin.
 * @param _gender string.
 * @returns boolean.
 */
const validateGender = (_gender: string): _gender is GenderEnum => {
    console.log('validate gender; ', _gender);
    return Object.values(GenderEnum).map(_g => _g.toString()).includes(_gender);
};

/**
 * Funktiota kutsutaan uudella potilas oliolla jonka jälkeen tarkistetaan että kaikki saadut kentät ovat luokkaa string, konvertoidaan pvm oikeaan muotoon ja 
 * tarkistetaan että seksuaalisuus vastaa enumia.
 * @param _patient string.
 * @returns object | boolean.
 */
export const validatePatient = (_patient: NewPatientEntry): NewPatientEntry => {
    if(validateString(_patient.name) && validateString(_patient.ssn) && validateString(_patient.gender) && validateString(_patient.occupation)) {
        if(validateGender(_patient.gender)) {
            const _modifiedDate = parseDate(_patient.dateOfBirth);
            //_modifiedDate = convertDate(_modifiedDate);
            if(_modifiedDate !== '') {
                console.log('Kaikki tarkistukset läpi!');
                _patient.dateOfBirth = _modifiedDate;
                return _patient;
            }
            //return false;
            throw new Error('Incorrect or missing data');
        }
        //return false;
        throw new Error('Incorrect or missing data');
    }
    //return false;
    throw new Error('Incorrect or missing data');
};

export default {
    validatePatient,
    GenderEnum
  };