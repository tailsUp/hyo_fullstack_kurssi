import { useParams } from 'react-router-dom';
import patientService from '../../services/patients';
import { Diagnosis, Patient } from '../../types';
import { useState, useEffect } from 'react';

import HealthEntries from './HealthEntries';
import { getMark } from '../Util/util';
import { show } from '../ComponentStyles/styles';
import Button from '@mui/material/Button';
import PatientEntry from '../Entry/PatientEntry';

interface Props {
    diag:     Diagnosis[];
    typeList: string[];
}

const PatientInfo = ( {diag, typeList}: Props ) => {
    const [hide, setHide]               = useState(true);
    const [hide2, setHide2]               = useState(false);
    const [code, setCode]               = useState('');
    const [description, setDescription] = useState('');
    const [specialist, setSpecialist]   = useState('');
    const [_date, setUserDate]          = useState('');
    const [_type, setType]              = useState('Hospital');
    const [patient, setPatient]         = useState<Patient>();
    const [diagnosisCodes,
        setDiagnosisCodes]              = useState<string[]>([]);
    const [dateDischarge,
        setDateDischarge]               = useState('');
    const [criteria, setCriteria]       = useState('');
    const [employer, setEmployer]       = useState('');
    const [dateStart, setDateStart]     = useState('');
    const [dateEnd, setDateEnd]         = useState('');
    const [rating, setRating]           = useState('');
    
    const ID = useParams().id;

    useEffect(() => {
  
      const fetchPatientList = async () => {
        if(ID !== undefined) {
            const patients = await patientService.getWithID(ID);
            setPatient(patients);
        }
      };
      void fetchPatientList();
    }, []);
    
    const toggleShow = (): void => {
        if(hide) {
            setHide(false);
            setHide2(true);
        } else {
            setHide(true);
            setHide2(false);
        }
    };

    if(patient) {

        const mark = getMark(patient);

        return (
            <div>
                {mark}
                <div>
                    <label><b>ssn: </b>{patient.ssn}</label>
                </div>
                <div>
                    <label><b>occupation: </b>{patient.occupation}</label>
                </div>
                
                <div style={{ display: show(hide), borderStyle: 'dotted'}}>
                    <PatientEntry options={typeList} _type={_type} setType={setType} description={description} setDescription={setDescription} 
                        code={code} setCode={setCode} specialist={specialist} setSpecialist={setSpecialist} _date={_date} setUserDate={setUserDate} 
                        diag={diag} dateDischarge={dateDischarge} setDateDischarge={setDateDischarge} criteria={criteria} setCriteria={setCriteria}
                        diagnosisCodes={diagnosisCodes} setDiagnosisCodes={setDiagnosisCodes} dateStart={dateStart} setDateStart={setDateStart} 
                        dateEnd={dateEnd} setDateEnd={setDateEnd} employer={employer} setEmployer={setEmployer} rating={rating} setRating={setRating}
                        hide={hide} setHide={setHide} setHide2={setHide2} ID={ID} patient={patient} setPatient={setPatient}/>
                </div>
                <div>
                    < HealthEntries entries={patient.entries}/>
                </div>
                <div>
                    <Button variant="text" style={{ color: 'white', backgroundColor: 'green', display: show(hide2) }} onClick={toggleShow}>Add entry</Button>
                </div>
            </div>
        );
    }
    return null;
};

export default PatientInfo;
