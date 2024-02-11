/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import express          from 'express';
import calculateBmi     from './calculateBmi';
import parseArguments3  from './exerciseCalculator2';
import { checkNumbers } from './utils';
const app = express();

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (_req, res) => {
   const _h = JSON.stringify(_req.query.height);
   const h = JSON.parse(_h);
   const _w = JSON.stringify(_req.query.weight);
   const w = JSON.parse(_w);
   try{
      const _temp: (string)[] = [h, w];
      const _nros = checkNumbers(_temp);
      const _r = calculateBmi(_nros.value1, _nros.value2);
      res.json({ height: parseInt(String(h)), weight: parseInt(String(w)), bmi: _r.toString() });
    } catch (error: unknown) {
      console.log('malformatted parameters');
      res.json({ error: "malformatted parameters" });
    }
});

/*
{
  "daily_exercises": [1, 0, 2, 0, 3, 0, 2.5],
  "target": 2.5
}

http://localhost:3003/exercises?target=2.5&daily_exercises=[1, 0, 2, 0, 3, 0, 2.5]

*/

app.get('/exercises', (_req, res) => {
  const _e = JSON.stringify(_req.query.daily_exercises);
  const e = JSON.parse(_e);
  const _t = JSON.stringify(_req.query.target);
  const t = JSON.parse(_t);
  console.log(e);
  console.log(t);
  if(e === undefined || t === undefined) {
    res.json({ error: "parameters missing" });
  }
  try {
    const _temp: (string)[] = e;
      const _r = parseArguments3(_temp, String(t));
      res.json(_r);
  } catch (error: unknown) {
    res.send(error);
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});