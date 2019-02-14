var models = require('../models')

const TaskController = {

    index(request, response){
        tasks = models.Task.findAll().then((tasks) => {
            response.render('pages/index', {tasks: tasks})
        })
    },

    create(request, response){
        let data = request.body
        if(data.task === undefined || data.task === ''){
            request.flash('error', "Task name is empty")
            response.redirect('/')
        } else {
            models.Task.create({title: data.task})
            response.redirect('/')
        }
    }

}

module.exports = TaskController
