import path from 'path';
import fs from 'fs';

import express from 'express';
import bodyParser from 'body-parser';
import chargeRoutes from "./routes/api/v1/charge"

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from "react-router-dom";

import App from '../src/App';

const PORT = process.env.PORT || 3006;
const app = express();

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
