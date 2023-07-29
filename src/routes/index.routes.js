import { Router } from "express";
import Task from '../models/task.js';

const router = Router();

router.get('/', (req, res) => {
    // res.send('hello world');
    res.render('index');
})
router.get('/about', (req, res) => {
    res.render('about');
})
router.get('/edit', (req, res) => {
    res.render('edit');
})
router.post('/task/add', async(req, res) => {

    const task = Task(req.body);

    console.log(task);

    await task.save();

    res.redirect('/');
})

export default router;