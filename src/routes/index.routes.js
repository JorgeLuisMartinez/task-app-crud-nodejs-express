import { Router } from "express";
import Task from '../models/task.js';

const router = Router();

//GET METHODS
router.get('/', async (req, res) => {
    // res.send('hello world');
    
    // Consulta a la base da datos "El comando lean sirve para que la consulta nos devuelva en vez de un objeto de mongodb un objeto convecional de javascript".
    const tasks = await Task.find().lean();
    // console.log(tasks);

    res.render('index', { tasks: tasks });
})
router.get('/about', (req, res) => {
    res.render('about');
})
router.get('/edit/:id', async (req, res) => {

    try {
        const task = await Task.findById(req.params.id).lean();
        res.render('edit', { task: task });
    } catch (error) {
        console.log(error.message);
    }
})
router.get('/delete/:id', async(req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id, req.body).lean();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
})


//POST METHODS
router.post('/task/add', async(req, res) => {
    try {
        const task = Task(req.body);
        console.log(task);
    
        await task.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
})

router.post('/edit/:id', async(req, res) => {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body).lean();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
})

export default router;