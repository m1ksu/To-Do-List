const express = require("express");
const connect = require("connect");

const serverStatic = require("serve-static");
const bodyParser = require("body-parser")

const pg = require("pg");


const app = connect();

// SERVE INDEX.HTML
app.use("/", express.static(__dirname)).listen(process.env.PORT || 8080,
    (req, res) => {
        console.log("Server online.\n");
});



// HANDLE REQUESTS
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});

    if (req.method === "POST") {

        var saveName = req.body.name;
        var saveItems = req.body.items;

        // TURN SAVEITEMS INTO SQL ARRAY FORM
        for (i = 0; i < saveItems.length; i++) {  
            saveItems[i] = `"${saveItems[i]}"`;
        } saveItems = saveItems.toString();
    
        saveItems = `{${saveItems}}`;
        console.log(saveItems);
        clientSave(saveName, saveItems);
    }

});

function clientSave (name, items) {
    dbPool.connect((error, client, release) => {

        if (!error) {
            console.log("Connected to database without errors.")
            connected = true;
        } else {
            console.log("Encountered error with code " + error.code + ";"
                + "\nWith error message: \"" + error.message + "\";");
        }

        if (client != null && connected) {

            console.log("Attempting query...");
            
            client.query(`INSERT INTO logins VALUES (${name}, ${items})`, 
            (error, result) => {
                if (error) {
                    console.log(error);
                } else {
                    console.log(result);
                }
            });
        }
    });
}


// DATABASE
var dbConfig = {
    user: "infnohhyetrtta",
    password: "dfeec8b28fb92116acda3355cba80ed0837c0a27a95ff3a7d612f06366cc038a",
    host: "ec2-79-125-105-164.eu-west-1.compute.amazonaws.com",
    database: "d74ljhbai0t40j",
    port: "5432",
    max: 20,
    idleTimeoutMillis: 1000000
}

const dbPool = new pg.Pool(dbConfig);

var connected = false;

