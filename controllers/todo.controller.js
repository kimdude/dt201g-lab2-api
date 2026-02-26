const Todo = require("../models/todo.model");

//Getting all products
exports.getAllTodos = async (request, h) => {
    try {
        return await Todo.find();
    } catch (error) {
        return h.response("There was an error: " + error).code(500);
    }
}

//Adding new todo
exports.addTodo = async (request, h) => {
    try {
        const todoItem = new Todo(request.payload);
        return await todoItem.save();
    } catch (error) {
        return h.response("There was an error: " + error).code(500);
    }
}

//Updating todo
exports.editTodo = async (request, h) => {
    try {

        const id = request.params.id;
        const status = request.payload.status;
        const updatedTodo = await Todo.findOneAndUpdate({_id: id}, {status: status}, {returnDocument: "after"});

        if(!updatedTodo) return h.response({error: "Invalid id"}).code(404);

        return updatedTodo;

    } catch (error) {
        return h.response("There was an error: " + error).code(500);
    }
}

//Deleting to do
exports.deleteTodo = async (request, h) => {
    try {
        const id = request.params.id;
        const deletedTodo = await Todo.deleteOne({_id: id});

        if(deletedTodo.deletedCount === 0) return h.response({error: "Invalid id"}).code(404);

        return h.response({message: "Item deleted"}).code(200);;
    } catch (error) {
        return h.response("There was an error: " + error).code(500);
    }
}