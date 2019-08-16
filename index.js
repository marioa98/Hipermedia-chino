const express = require('express');
const app = express();
const mongoose = require('mongoose');

/**
 * Restful API with NodeJS
 * Setup Mongo DB (titles or toDoList collection)
 * Setup Postman
 * Setup nodemon
 * Create Server
 * Setup schemas
 * Setup routes using middleware (Get, Post, Put, Delete)
 * Setup Controllers
 * Start server
 * Testing endpoints with postman
 */

function conectionDB(uri) {

    mongoose.connect(uri);

    let schema = mongoose.Schema;
    let toDoListSchema = new schema({
        responsible: String,
        tasks: Array
    })

    let Tasks = mongoose.model('Tasks', toDoListSchema);

    let task = Tasks({
        responsible: 'John Doe',
        tasks: ["Task 1", "Task 2"]
    });

    task.save(function (err) {
        if (err) throw err;
        else console.log('Task saved')
    })
}

conectionDB("mongodb://localhost/HiperMediaDB1");