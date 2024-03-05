//Icons
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { Patient } from '../../types';

export const typeToList = (patients: Patient[]): string[] => {
    const x: string[] = [];
        patients.forEach((_p) => {
            if(_p.entries.length !== undefined || _p.entries.length > 0) {
                _p.entries.forEach((_e) => {
                    if(x.indexOf(_e.type) === -1) {
                        x.push(_e.type);
                    }
                });
            }
        });
    return x;
};

export const getMark = (p: Patient) => {
    if(p.gender === 'male') {
        return (
            <div>
                <h2>
                    {p.name} <MaleIcon/>
                </h2>
            </div>
        );
    }
    if(p.gender === 'female') {
        return (
            <div>
                <h2>
                    {p.name} <FemaleIcon/>
                </h2>
            </div>
        );
    }
    return (
        <div>
            <h2>
                {p.name} <QuestionMarkIcon/>
            </h2>
        </div>
    );
};

export const getEstablishment = (check: string) => {
    if(check === 'Hospital') 
    {
        return (
            <div>
                <h3>Hospital - Treatment information</h3>
            </div>
        );
    } else if(check === 'OccupationalHealthcare') 
    {
        return (
            <div>
                <h3>Occupational Healthcare - Treatment information</h3>
            </div>
        );
    } else if(check === 'HealthCheck') 
    {
        return (
            <div>
                <h3>Healthcheck - Treatment information</h3>
            </div>
        );
    } else 
    {
        return null;
    }
};

export const stringIsNotEmpty = (test: string): boolean => {
    if(typeof test === "string" && test.length === 0) {
        return false;
    }
    return true;
};

export const checkEntries = (listOfString: string[]): boolean => {
    for(let i=0;i<listOfString.length;i++) {
        if(!stringIsNotEmpty(listOfString[i])) {
            console.log(listOfString[i]);
            return false;
        }
    }
    return true;
};