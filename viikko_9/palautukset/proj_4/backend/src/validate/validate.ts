import { NewPatientEntry } from "../types/types";

/*const undefinedOrEmpty = (check: string): boolean => {
    if(check === undefined || check === "") 
    {
        return false;
    }
    return true;
};*/

/**
 * Funktio tarkistaa onka annettu muuttuja string. Ei tarkista mahdollisten string olioiden osalta. Ei tarvetta.
 * @param _string unknown.
 * @returns TYPE PREDICATE.
 */
const validateString = (_string: unknown): _string is string => {
    if(typeof _string === 'string' || _string instanceof String)
    {
        return true;
    }
    return false;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};
  
const parseDate = (date: string): string => {
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
    return Object.values(GenderEnum).map(_g => _g.toString()).includes(_gender);
};

/**
 * Funktiota kutsutaan uudella potilas oliolla jonka jälkeen tarkistetaan että kaikki saadut kentät ovat luokkaa string, konvertoidaan pvm oikeaan muotoon ja 
 * tarkistetaan että seksuaalisuus vastaa enumia.
 * @param _patient string.
 * @returns object | boolean.
 */
export const validatePatient = (_patient: NewPatientEntry): NewPatientEntry => {
    if(validateString(_patient.name) && validateString(_patient.ssn) && validateString(_patient.gender) && validateString(_patient.occupation))
    {
        if(validateGender(_patient.gender))
        {
            const _modifiedDate = parseDate(_patient.dateOfBirth);
            //_modifiedDate = convertDate(_modifiedDate);
            if(_modifiedDate !== '')
            {
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

/*const stringIsNotEmpty = (test: string): boolean => {
    if(typeof test === "string" && test.length === 0)
    {
        return false;
    }
    return true;
};

const checkEntries = (listOfString: string[]): boolean => {
    for(let i=0;i<listOfString.length;i++)
    {
        if(!stringIsNotEmpty(listOfString[i]))
        {
            return false;
        }
    }
    return true;
};*/

export const checkDateForms = (listOfDates: string[]) => {
    for(let i=0;i<listOfDates.length;i++)
    {
        const regex = new RegExp('d{4}-d{2}-d{2}');

        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        if(!regex.test(listOfDates[i]).toString())
        {
            return false;
        }
        else
        {
            const d = new Date(listOfDates[i]);
            const t = d.getTime();
            if(!t && t !== 0)
            {
                return false;
            }
        }
    }
    return true;
};

export const validateRating = (n: number) => {
    if(n < 0 || n > 3) {
        return false;
    }
    return true;
};