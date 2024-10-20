import express from 'express';
import DentistController from '../controllers/dentistController.js';

const router = express.Router();

router.post('/', DentistController.createDentist);
router.get('/', DentistController.getDentists);
router.put('/:id', DentistController.updateDentist);

export default router;