import express from 'express';
import service from '../services/patientService';
//import { PatientEntry } from '../types/patient';
import patientService from '../services/patientService';
import validatePatient from '../validate/validate';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log('patienst routeen saavuttu.');
  const x = service.getEntries();
  console.log(x); 
  res.send(x);
});

/*router.post('/', (_req, res) => {
  res.send({});
});*/

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
router.post('/', (_req, res) => {
  console.log('/api/patients');
  const { name, dateOfBirth, ssn, gender, occupation } = _req.body;
  try {
    const _validate = validatePatient.validatePatient({ name, dateOfBirth, ssn, gender, occupation });
    const _new = patientService.addPatient(_validate);
    res.send(_new);
  } catch(error: unknown) {
    console.log('Error with input fields - make sure that all fields are in right format!');
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }


  /*const _new = patientService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  });
  res.send(_new);
  //res.send({});*/
});

export default router;

/*

        "id": "d2773336-f723-11e9-8f0b-362b9e155667",
        "name": "John McClane",
        "dateOfBirth": "1986-07-09",
        "ssn": "090786-122X",
        "gender": "male",
        "occupation": "New york city cop"


*/