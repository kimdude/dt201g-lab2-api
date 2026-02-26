"use strict"

require("dotenv").config();
const Hapi = require("@hapi/hapi");
const mongoose = require("mongoose");

const init = async() => {

    //Connecting to Hapi server
    const server = Hapi.server({
        port: process.env.PORT || 5000,
        host: "0.0.0.0"
    });

    //Connecting to MongoDb
    mongoose.connect(process.env.DB_CONNECTION_STRING).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log("Error connecting to database: " + error);
    });

    //Routes
    require("./Routes/todo.routes")(server);

    //Starting server
    await server.start();
    console.log("Server running on %s", server.info.uri);
}

process.on("unhandledRejection", (err) => {
    console.log(err);
    process.exit(1);
});

init();