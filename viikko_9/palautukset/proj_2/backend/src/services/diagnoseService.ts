import data from '../data/diagnoses';
import { DiagnoseEntry } from '../types/diagnose';

const diagnoses: DiagnoseEntry[] = data as DiagnoseEntry[];

const getEntries = (): DiagnoseEntry[] => {
  return diagnoses;
};

const addDiagnosis = (
  code: string, name: string, latin: string
): DiagnoseEntry => {
  const _newEntry = {
    code,
    name,
    latin,
  };

diagnoses.push(_newEntry);
return _newEntry;
};

const findByCode = (code: string): DiagnoseEntry | undefined => {
  const entry = diagnoses.find(d => d.code === code);
  return entry;
};

export default {
  getEntries,
  addDiagnosis,
  findByCode
};
