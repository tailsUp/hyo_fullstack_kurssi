//const express = require('express');
import express                  from 'express';
import { convertToNumber, joinInputsToArray }        from './util';
import { calculateBmi }         from './bmiCalculator';
import { exerciseCalculator }   from './exerciseCalculator';
import { isEmpty }              from 'lodash';
const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    if(req.query.height !== undefined && req.query.weight !== undefined) {
        //Error
        res.send({
            error: "malformatted parameters"
        });
    }
    try {
        //const _h = JSON.stringify(req.query.height);
        //const _w = JSON.stringify(req.query.weight);
        const h = convertToNumber(req.query.height);
        const w = convertToNumber(req.query.weight);
        const x = calculateBmi(h, w);
        console.log(x);
        res.send({
            weight: 72,
            height: 180,
            bmi: x
        });
    } catch (error: unknown) {
        let errorMessage = 'Something bad happened.';
        if (error instanceof Error) {
          errorMessage += ' Error: ' + error.message;
        }
        console.log(errorMessage);
    }
    res.send({
        error: "malformatted parameters"
    });
});

//http://localhost:3003/bmi?height=180&weight=72
//http://localhost:3003/exercise?daily_exercises=[1, 0, 2, 0, 3, 0, 2.5]&target=2.5

/* eslint-disable-next-line padded-blocks */
app.post('/exercise', (request, response) => {
    const _body = request.body;
    if(isEmpty(_body)) {
        console.log('EI LIITEITÄ!');
    }
    const { daily_exercises, target } = _body;
    const _a = joinInputsToArray(daily_exercises, target);
    const x = exerciseCalculator(_a);
    response.json(x);
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
