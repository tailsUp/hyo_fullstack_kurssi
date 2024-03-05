import express from 'express';
import service from '../services/patientService';
//import { PatientEntry } from '../types/patient';
import patientService from '../services/patientService';
import {validatePatient, checkDateForms, validateRating } from '../validate/validate';
//import validate, { validateHealthCheckEntries, validateHospitalEntries, validateOccupationalEntries } from '../validate/validate';
import { PatientEntrySSN } from '../types/patient';
import { NewHospitalEntry, SaveBaseEntry, NewOccupationalEntry, NewHealthEntry } from '../types/diagnose';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log('Haetaan kaikki potilaat.');
  const x = service.getEntries();
  res.send(x);
});

/**
 * Funktio lisää frontista tulleen uuden entryn asiakkaalle. Frontissa on tehty jo tarkistus että arvot eivät ole tyhjiä, joten tarkistetaan tässä
 * kohtaa että päivämäärät ovat oikeassa muodossa ja jos eivät ole niin palautetaan error.
 */
router.post('/:id/entries', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const values: SaveBaseEntry = req.body;
  console.log('Router lisää uusi entry: ', values.type);
  const ID = req.params.id;
  //let errors: string[] = [];
  
  try {
    if(values.type === 'Hospital')
    {
      if(checkDateForms([values.date, values.discharge.date])) 
      {
        console.log('Hospital entry');
        const obj: NewHospitalEntry = {
          description:        values.description,
          date:               values.date,
          specialist:         values.specialist,
          type:               'Hospital',
          diagnosisCodes:     values.diagnosisCodes,
          discharge:          values.discharge,
        };
        const _new = patientService.addEntryToPatient(obj, ID);
        res.send(_new);
      }
      else
      {
        res.status(401).json({ error: 'Date must be inputted in form: YYYY-MM-DD' });
      }

    }
    else if(values.type === 'OccupationalHealthcare')
    {
      if(checkDateForms([values.date, values.sickLeave.endDate, values.sickLeave.startDate])) {
        console.log('Occupational entry');
        const obj: NewOccupationalEntry = {
          description:        values.description,
          date:               values.date,
          specialist:         values.specialist,
          type:               values.type,
          diagnosisCodes:     values.diagnosisCodes,
          employerName:       values.employerName,
          sickLeave:          values.sickLeave,
        };
        const _new = patientService.addEntryToPatient(obj, ID);
        res.send(_new);
      }
      else
      {
        res.status(401).json({ error: 'Date must be inputted in form: YYYY-MM-DD' });
      }
    }
    else if(values.type === 'HealthCheck') 
    {
      //ASDADASDASASD
      if(checkDateForms([values.date]))
      {
        if(validateRating(values.healthCheckRating)) {
          console.log('Health entry');
          const obj: NewHealthEntry = {
            description:        values.description,
            date:               values.date,
            specialist:         values.specialist,
            type:               values.type,
            healthCheckRating:  values.healthCheckRating,
          };
          const _new = patientService.addEntryToPatient(obj, ID);
          res.send(_new);
        } 
        else
        {
          res.status(401).json({ error: 'Rating has to be between 0 and 3' });
        }
      }
      else
      {
        res.status(401).json({ error: 'Date must be inputted in form: YYYY-MM-DD' });
      }
    }
    else {
      throw new Error('DB ERROR');
    }
  } catch(error) {
    console.log('ERROR WHILE ADDING A NEW ENTRY: ', error);
    //res.status(401).json({ error: errors });
    res.status(401);
  }
});

/**
 * Funktio kutsuu service luokkaa ja välittää id:n perusteella löytyvän potilaan tai null.
 */
router.get('/:id', (_req, res) => {
  console.log('Haetaan potilas ID perusteella');
  const x: PatientEntrySSN | null= service.getEntryByID(_req.params.id);
  res.send(x);
});

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
router.post('/', (_req, res) => {
  console.log('Lisätään uusi potilas');
  const { name, dateOfBirth, ssn, gender, occupation } = _req.body;
  try {
    const _validate = validatePatient({ name, dateOfBirth, ssn, gender, occupation });
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
});

export default router;
