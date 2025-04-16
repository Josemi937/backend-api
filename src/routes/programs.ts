import { Router } from 'express';
import { getPrograms, addProgram, deleteProgram, updateProgram } from '../controllers/programs'; 

const router = Router();


router.get('/', getPrograms);
router.post('/', addProgram);
router.delete('/:id', deleteProgram);
router.put('/:id', updateProgram);


export { router as programRoutes };  
