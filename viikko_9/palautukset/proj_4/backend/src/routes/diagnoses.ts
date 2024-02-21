import express from 'express';
import service from '../services/diagnoseService';

const router = express.Router();

router.get('/', (_req, res) => {
  console.log('GET DIAGNOSES!');
  res.send(service.getEntries());
});

router.post('/', (_req, res) => {
  console.log('POST DIAGNOSES!');
  res.send({});
});

router.get('/:code', (req, res) => {
  const _diagnose = service.findByCode(String(req.params.code));

  if (_diagnose) {
    res.send(_diagnose);
  } else {
    res.sendStatus(404);
  }
});

export default router;