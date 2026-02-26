"use strict"

require("dotenv").config();
const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");

const init = async() => {

    //Connecting to Hapi server
    const server = Hapi.server({
        port: 5000,
        host: "localhost"
    });

    //Connecting to MongoDb
    mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log("Error connecting to database: " + error);
    });

    //Model
    const Todo = mongoose.model("Todo", {
        name: String,
        descr: String,
        status: String
    });

    server.route([
        {
            method: "GET",
            path: "/todo",
            handler: async(request, h) => {
                try {
                    return await Todo.find();
                } catch (error) {
                    return h.response("There was an error: " + error);
                }
            }
        },
        {
            method: "POST",
            path: "/todo",
            handler: async(request, h) => {
                try {
                    const todoItem = new Todo(request.payload);
                    return await todoItem.save();
                } catch (error) {
                    return h.response("There was an error: " + error);
                }
            }
        }
    ]);

    //Starting server
    await server.start();
    console.log("Server running on %s", server.info.uri);
}

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();