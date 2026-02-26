const mongoose = require("mongoose");

//Model
const todoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: [3, "Namn måste vara minst 3 tecken långt"]
    },
    descr: {
        type: String,
        max: [200, "Beskrivning får vara max 200 tecken långt"]
    },
    status: {
        type: String,
        default: "Ej påbörjad",
        required: true
    }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;