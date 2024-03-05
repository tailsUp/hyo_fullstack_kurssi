import { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Button, Divider, Container, Typography } from '@mui/material';

import { apiPing } from "./constants";
import { Diagnosis, Patient } from "./types";

import patientService from "./services/patients";
import diagnose from "./services/diagnose";
import PatientListPage from "./components/PatientListPage";
import PatientInfo2 from "./components/PatientListPage/PatientInfo";
import { typeToList } from "./components/Util/util";

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [diag, setDiag]         = useState<Diagnosis[]>([]);
  const [_type, setType]        = useState<string[]>([]);

  useEffect(() => {
    void axios.get<void>(`${apiPing}`);

    const fetchPatientList = async () => {
      const patients = await patientService.getAll();
      console.log('ASDASD', patients);
      setPatients(patients);
      setType(typeToList(patients));
    };
    const fetchDiag = async () => {
      const d = await diagnose.getAll();
      console.log('QWEQWE', d);
      setDiag(d);
    };
    void fetchPatientList();
    void fetchDiag();
  }, []);
  
  return (
    <div className="App">
      <Router>
        <Container>
          <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
            Patientor
          </Typography>
          <Button component={Link} to="/" variant="contained" color="primary">
            Home
          </Button>
          <Divider hidden />
          <Routes>
            <Route path="/" element={<PatientListPage patients={patients} setPatients={setPatients} />} />
            <Route path="/patients/:id" element={<PatientInfo2 diag={diag} typeList={_type} />} />
          </Routes>
        </Container>
      </Router>
    </div>
  );
};
//<Route path="/patients/:id" element={<PatientInfo2 patients={patients}/>} />

export default App;
