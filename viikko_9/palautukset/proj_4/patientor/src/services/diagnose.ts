import axios from "axios";
import { DiagnoseEntry, Diagnosis } from "../types";

import { apiBaseUrl } from "../constants";

const getWithCODE = async (CODE: string) => {
  const { data } = await axios.get<DiagnoseEntry | undefined>(`${apiBaseUrl}/diagnosis/` + CODE);
  return data;
};

const getAll = async () => {
  const { data } = await axios.get<Diagnosis[]>(
    `${apiBaseUrl}/diagnosis`
  );
  return data;
};

export default {
    getWithCODE,
    getAll
};

