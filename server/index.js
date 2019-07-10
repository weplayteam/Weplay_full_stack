import path from 'path';
import fs from 'fs';

import express from 'express';
import bodyParser from 'body-parser';
import chargeRoutes from "./routes/api/v1/charge"

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

import App from '../src/App';


const app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const PORT = process.env.PORT || 3001;

////////////////////////////////////////////////////////////////////////////////////////
//SET UP CONNECTION TO DATABASE
////////////////////////////////////////////////////////////////////////////////////////
var con = mysql.createConnection({
    host: "weplay.org",
    user: "cdomkam",
    password: "weplay",
    database: "weplay_db"
});

////////////////////////////////////////////////////////////////////////////////////////
//REGISTER USER AT SIGN UP
////////////////////////////////////////////////////////////////////////////////////////

/*

Web page -------- Server ---- SQL
    |
    |
    |
Reg fin page


*/
app.post('/signup', function(req, res){
    console.log(req.body.password)
    
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.conf_password;
    console.log("checking passwords")
    // if (password == password2){
        console.log("checking passwords2")
        // if (password.length < 4 || email.length < 4){
            console.log("checking passwords3")
            con.connect(function(err) {
                if (err) throw err;
                console.log("Connected! to weplay db");
            });

            var sql = "INSERT INTO user (email, password) VALUES ('" + req.body.email + "' ,'" + req.body.password + "')";
            console.log(sql);

            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");
            });
            con.end();
        // }
        console.log("checking passwords4")
    // } else{
    //     res.status(500).send("{errors: \"Passwords don't match\"}").end()
    // }
    console.log("checking passwords end")
});

////////////////////////////////////////////////////////////////////////////////////////
//CONFIGURE ACCESS TO STATIC FILES AND ENTRY POINT
////////////////////////////////////////////////////////////////////////////////////////
app.use(express.static('build/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/charge", chargeRoutes);

app.get('/*', (req, res) => {
    const react_app = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App />
        </StaticRouter>
    );

    const indexFile = path.resolve('build/index.html');
    fs.readFile(indexFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Something went wrong:', err);
            return res.status(500).send('Oops, better luck next time!');
        }

        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${react_app}</div>`)
        );
    });
});




app.listen(PORT, () => {
    console.log(`😎 Server is listening on port ${PORT}`);
});
