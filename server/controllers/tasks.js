var Task = require('../models/task.js')

module.exports = {
    index: (req, res) => {
        Task.find()
            .then(tasks => res.json({data: tasks}))
            .catch(err => res.json(err))
            //console.log(persons)
    },
    show_one: (req, res) => {
        Task.findOne({_id: req.params.id})
            .then(task => {
                console.log("task");
                res.json(task);
                console.log("task");
            })
            .catch(err => res.json(err));
    },
    create: (req, res) => {
        task = new Task();
        task.title = req.params.title,
        task.description = req.params.description,
        task.completed = req.body.completed,
        task.save()
            .then(task => res.json({data: task}))
            .catch(err => res.json(err));
    },
    update: (req,res) => {
        var task_id = req.params.id;
        Task.updateOne({_id: task_id}, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed
        })
            .then(result => res.json({data:task}))
            .catch(err => res.json(err));
    },
    destroy: (req, res) => {
        Task.remove({_id: req.params.id})
        .then(deletedTask => res.json({data: deletedTask}))
        .catch(err => res.json(err));
    }
};