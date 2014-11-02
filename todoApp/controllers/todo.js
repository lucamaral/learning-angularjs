module.exports = function (app) {

    var Todo = app.models.todo;

    var Controller = {
        index: function (request, response) {
            response.render("index");
        },
        list: function (request, response) {
            Todo.find(function (err, todos) {
                if (err) {
                    response.send(err);
                } else {
                    response.json(todos);
                }
            });
        },
        save: function (request, response) {
            var todo = {
                text: request.body.text,
                done: false
            };
            Todo.create(todo, function (err, createdTodo) {
                if (err) {
                    response.send(err);
                } else {
                    Controller.list(request, response);
                }
            });
        },
        delete: function (request, response) {
            var todo = {
                _id: request.params.id
            };
            console.info(todo);
            Todo.remove(todo, function (err, removedTodo) {
                if (err) {
                    response.send(err);
                } else {
                    Controller.list(request, response);
                }
            });
        }
    };

    return Controller;
};