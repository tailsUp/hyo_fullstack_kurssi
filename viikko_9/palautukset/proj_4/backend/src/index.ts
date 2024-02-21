import express from 'express';

//Routes:
import diagnosesRouter from './routes/diagnoses';
import patientsRouter from './routes/patients';

const app = express();
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const cors = require('cors');
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());
app.use(express.json());
app.use('/api/patients', patientsRouter);
app.use('/api/diagnosis', diagnosesRouter);


const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});



app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});