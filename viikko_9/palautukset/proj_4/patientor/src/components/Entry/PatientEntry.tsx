//import {  TextField, InputLabel, MenuItem, Select, Grid, Button, SelectChangeEvent } from '@mui/material';
//import {  TextField, InputLabel, Select, Grid, Button, MenuItem, SelectChangeEvent } from '@mui/material';
import { InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import EntryOptions from './EntryOptions';
import { Diagnosis, DischargeEntry, NewHealthEntry, NewHospitalEntry, NewOccupationalEntry, Patient, SickLeaveEntry } from '../../types';
import { checkEntries, getEstablishment } from '../Util/util';
import { SyntheticEvent, useState } from 'react';
import patientService from '../../services/patients';
import InputError from '../Error/InputError';

interface Props {
    diag:           Diagnosis[];
    options:        string[];
    _type:          string;
    specialist:     string;
    description:    string;
    code:           string;
    _date:          string;
    diagnosisCodes: string[];
    dateDischarge:  string;
    criteria:       string;
    employer:       string;
    dateEnd:        string;
    dateStart:      string;
    rating:         string;
    hide:           boolean;
    ID:             string | undefined;
    patient:        Patient;

    setPatient:         React.Dispatch<React.SetStateAction<Patient | undefined>>;
    setHide2:           React.Dispatch<React.SetStateAction<boolean>>;
    setHide:            React.Dispatch<React.SetStateAction<boolean>>;
    setRating:          React.Dispatch<React.SetStateAction<string>>;
    setEmployer:        React.Dispatch<React.SetStateAction<string>>;
    setDateEnd:         React.Dispatch<React.SetStateAction<string>>;
    setDateStart:       React.Dispatch<React.SetStateAction<string>>;
    setDateDischarge:   React.Dispatch<React.SetStateAction<string>>;
    setCriteria:        React.Dispatch<React.SetStateAction<string>>;
    setDiagnosisCodes:  React.Dispatch<React.SetStateAction<string[]>>
    setType:            React.Dispatch<React.SetStateAction<string>>;
    setSpecialist:      React.Dispatch<React.SetStateAction<string>>;
    setDescription:     React.Dispatch<React.SetStateAction<string>>;
    setCode:            React.Dispatch<React.SetStateAction<string>>;
    setUserDate:        React.Dispatch<React.SetStateAction<string>>;
}

const PatientEntry = ( { diag, options, _type,  specialist, description, code, _date, dateDischarge, criteria, diagnosisCodes, dateStart, dateEnd, employer, rating,hide, ID,
    setType, setUserDate, setSpecialist, setDescription, setCode, setDateDischarge,  setCriteria,  setDiagnosisCodes, setEmployer, setDateEnd, setDateStart, setRating,
    setHide, setHide2, setPatient, }: Props ) => {

    const [error, setError]       = useState<string>('');

    const onTypeChange = (event: SelectChangeEvent<string>) => {
        event.preventDefault();
        if ( typeof event.target.value === "string") {
            setType(event.target.value);
        }
    };

    const CancelAddButtons = () => {
        return (
            <div>
                <br/>
                <Button variant="text" style={{ color: 'white' , backgroundColor: 'green'}} type="submit" >Add</Button>
                <Button variant="text" style={{ color: 'white' , backgroundColor: 'red', marginLeft: '20px'}} onClick={() => {CancelEntry();}}>Cancel</Button>
            </div>
        );
    };

    /*const CancelEntry = (event: SelectChangeEvent<string> | undefined) => {
        console.log("ASD");
        if(event !== undefined) {
            event.preventDefault();
            console.log('CANCEL ENTRY');
            ClearAll();
        }
    };*/

    const CancelEntry = () => {
        console.log('CANCEL ENTRY');
        ClearAll();
    };

    const ClearAll = () => {
        setRating('');
        setEmployer('');
        setDateEnd('');
        setDateStart('');
        setDateDischarge('');
        setCriteria('');
        setType('Hospital');
        setSpecialist('');
        setDescription('');
        setCode('');
        setUserDate('');
        setDiagnosisCodes([]);
        setHide(true);
        setHide2(false);
    };

    const clearErrorInput = () => {
        setTimeout(() => {
          setError('');
        }, 4000);
      };

    const getEntries = async (ID: string) => {
        const re = await patientService.getWithID(ID);
        setPatient(re);
    };

    const AddEntry = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(_type);
        if(_type === 'Hospital' && ID !== undefined) {
            if(checkEntries([_date, specialist, description, dateDischarge, criteria])) {
                const dis:  DischargeEntry = {
                    date:       dateDischarge,
                    criteria:   criteria,
                };
                const obj: NewHospitalEntry = {
                    description:        description,
                    date:               _date,
                    type:               'Hospital',
                    specialist:         specialist,
                    diagnosisCodes:     diagnosisCodes,
                    discharge:          dis,
                };
                patientService.addHospitalEntry(obj, ID).then((x) => {
                    console.log('new entry added: ', x);
                    getEntries(ID);
                    ClearAll();
                }).catch((error) => {
                    console.log('ERROR: ', error.response.data.error);
                    setError(error.response.data.error);
                    clearErrorInput();
                });
            }
            else 
            {
                setError('All fields must have values');
                clearErrorInput();
            }
        } else if (_type === 'HealthCheck' && ID !== undefined) {
            if(checkEntries([_date, specialist, description, rating])) {
                const obj: NewHealthEntry = {
                    description:        description,
                    date:               _date,
                    type:               'HealthCheck',
                    specialist:         specialist,
                    healthCheckRating:  rating,           
                };
                patientService.addHealthEntry(obj, ID).then((x) => {
                    console.log('new entry added: ', x);
                    getEntries(ID);
                    ClearAll();
                }).catch((error) => {
                    console.log('ERROR: ', error.response.data.error);
                    setError(error.response.data.error);
                    clearErrorInput();
                });
            }
            else 
            {
                setError('All fields must have values');
                clearErrorInput();
            }
        } else if (_type === 'OccupationalHealthcare' && ID !== undefined) {
            if(checkEntries([_date, specialist, employer, description, dateEnd, dateStart])) {
                const sick: SickLeaveEntry = {
                    startDate:  dateStart,
                    endDate:    dateEnd,
                };
                const obj: NewOccupationalEntry = {
                    description:        description,
                    date:               _date,
                    type:               'OccupationalHealthcare',
                    specialist:         specialist,
                    diagnosisCodes:     diagnosisCodes,
                    employerName:       employer,
                    sickLeave:          sick,
                };
                patientService.addOccupationalEntry(obj, ID).then((x) => {
                    console.log('new entry added: ', x);
                    getEntries(ID);
                    ClearAll();
                }).catch((error) => {
                    console.log('ERROR: ', error.response.data.error);
                    setError(error.response.data.error);
                    clearErrorInput();
                });
            }
            else 
            {
                setError('All fields must have values');
                clearErrorInput();
            }
        }
    };

    return (
        <div>
        <br/>
            <InputError text={error}/>
            <form onSubmit={(AddEntry)}>
                {getEstablishment(_type)}
                <InputLabel style={{ marginTop: 20 }}>Place</InputLabel>
                <Select label="Options" fullWidth value={_type} onChange={onTypeChange}>
                    {options.map(option => <MenuItem key={option} value={option}>{option}</MenuItem>)}
                </Select>
                <EntryOptions diag={diag} type={_type} description={description} setDescription={setDescription} 
                        code={code} setCode={setCode} specialist={specialist} setSpecialist={setSpecialist} 
                        _date={_date} setUserDate={setUserDate} dateDischarge={dateDischarge} setDateDischarge={setDateDischarge} 
                        criteria={criteria} setCriteria={setCriteria} diagnosisCodes={diagnosisCodes} setDiagnosisCodes={setDiagnosisCodes}
                        dateStart={dateStart} setDateStart={setDateStart} dateEnd={dateEnd} setDateEnd={setDateEnd} employer={employer} 
                        setEmployer={setEmployer} rating={rating} setRating={setRating} hide={hide} setHide={setHide} />
                <CancelAddButtons />
            </form>
        <br/><br/>
        </div>
    );
};

export default PatientEntry;