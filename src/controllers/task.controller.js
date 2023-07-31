import Task from '../models/task.js';

export async function renderTask(req, res) {
    // res.send('hello world');
    // Consulta a la base da datos "El comando lean sirve para que la consulta nos devuelva en vez de un objeto de mongodb un objeto convecional de javascript".
    const tasks = await Task.find().lean();
    // console.log(tasks);
    res.render('index', { tasks: tasks });
}

export async function renderEditPage(req, res) {
    try {
        const task = await Task.findById(req.params.id).lean();
        res.render('edit', { task: task });
    } catch (error) {
        console.log(error.message);
    }
}

export async function deleteFunction(req, res) {
    try {
        await Task.findByIdAndDelete(req.params.id, req.body).lean();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

export async function toggleDone(req, res) {
    try {
        const { id } = req.params;
        const task = await Task.findById(id);
        task.done = !task.done;
        await task.save();

        res.redirect('/');
    } catch (error) {
        console.log();
    }
}

export async function createTask(req, res) {
    try {
        const task = Task(req.body);
        console.log(task);

        await task.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}

export async function editFunction(req, res) {
    try {
        await Task.findByIdAndUpdate(req.params.id, req.body).lean();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
}