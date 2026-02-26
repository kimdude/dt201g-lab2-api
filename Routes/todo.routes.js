const todoController = require("../controllers/todo.controller");

module.exports = (server) => {
    server.route([
        {
            method: "GET",
            path: "/todo",
            handler: todoController.getAllTodos
        },
        {
            method: "POST",
            path: "/todo",
            handler: todoController.addTodo
        },
        {
            method: "PUT",
            path: "/todo/{id}",
            handler: todoController.editTodo
        },
        {
            method: "DELETE",
            path: "/todo/{id}",
            handler: todoController.deleteTodo
        }
    ]);
}