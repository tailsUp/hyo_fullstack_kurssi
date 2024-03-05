import axios from "axios";
import { Patient, PatientFormValues, NewBaseEntry, NewHospitalEntry, NewOccupationalEntry, NewHealthEntry } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(`${apiBaseUrl}/patients`);
  return data;
};

const getWithID = async (ID: string) => {
  const { data } = await axios.get<Patient>(`${apiBaseUrl}/patients/` + ID);
  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(`${apiBaseUrl}/patients`, object);
  return data;
};

const addHospitalEntry = async (object: NewHospitalEntry, id: string) => {
  console.log('ADD HOSPITALENTRY for PATIENT', object);
  const { data } = await axios.post<NewBaseEntry>(`${apiBaseUrl}/patients/` + id + `/entries`, object);
  return data;
};

const addOccupationalEntry = async (object: NewOccupationalEntry, id: string) => {
  console.log('ADD OCCUPATIONALENTRY for PATIENT', object);
  const { data } = await axios.post<NewBaseEntry>(`${apiBaseUrl}/patients/` + id + `/entries`, object);
  return data;
};

const addHealthEntry = async (object: NewHealthEntry, id: string) => {
  console.log('ADD HEALTENTRY for PATIENT');
  const { data } = await axios.post<NewBaseEntry>(`${apiBaseUrl}/patients/` + id + `/entries`, object);
  return data;
};

export default {
  getAll, create, getWithID, addHospitalEntry, addOccupationalEntry, addHealthEntry
};

