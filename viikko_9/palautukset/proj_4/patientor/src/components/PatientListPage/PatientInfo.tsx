import { useParams } from 'react-router-dom';
import patientService from '../../services/patients';
import { Patient } from '../../types';
import { useState, useEffect } from 'react';

//Icons
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

const getMark = (p: Patient) => {
    console.log(p);
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

const PatientInfo = () => {
    

    const ID = useParams().id;
    console.log('ID:', ID);

    const [patient, setPatient] = useState<Patient>();

    useEffect(() => {
  
      const fetchPatientList = async () => {
        if(ID !== undefined) {
            const patients = await patientService.getWithID(ID);
            setPatient(patients);
        }
      };
      void fetchPatientList();
    }, []);
    
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
            </div>
        );
    }
    return null;
};

export default PatientInfo;