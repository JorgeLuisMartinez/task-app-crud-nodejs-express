import { Router } from "express";
import { renderTask, renderEditPage, deleteFunction, toggleDone, createTask, editFunction} from '../controllers/task.controller.js';

const router = Router();

//GET METHODS
router.get('/', renderTask)


router.get('/task/:id/edit', renderEditPage);

router.get('/task/:id/delete', deleteFunction);

router.get('/task/:id/toggleDone', toggleDone);


//POST METHODS
router.post('/task/add', createTask);

router.post('/task/:id/edit', editFunction)

export default router;