module.exports = function (app) {

    var TodoController = app.controllers.todo;
    app.get("/", TodoController.index);
    app.get("/api/todos", TodoController.list);
    app.post("/api/todos", TodoController.save);
    app.delete("/api/todos/:id", TodoController.delete);
};