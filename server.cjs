const express = require('express')
// Importing required functions from dbConnection.cjs
const {connectToDb, getDb} = require('./dbConnection.cjs')

const app = express()

let db
connectToDb(function(error) {
    if(error) {
        console.log('Could not establish connection...')
        console.log(error)
    } else {
        app.listen(8000)
        db = getDb()
        console.log('Listening on port 8000...')
    }
})

// app.get('/', function(request, response) {
//     response.json({
//         "status" : "Welcome ;)"
//     })
// })
