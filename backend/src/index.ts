"use strict";
const express = require("express");
const cors = require("cors");
const exp = require("constants");
const fileUpload = require("express-fileupload");
const path = require("path");

require("dotenv").config;
const app = express();
const port = process.env.PORT || 5000;

//dotenv setup
// require("dotenv").config({ path: ".env.prod" });
// require('dotenv').config({ path: '.env.dev' });

app.use(cors());
app.use(express.json());
app.use(fileUpload());

//defiene routes
// const uploadRoutes = require("./routes/uploadRoutes")
app.post('/upload', (req: { files: { file: any; } | null; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { msg: string; }): any; new(): any; }; send: { (arg0: any): any; new(): any; }; }; json: (arg0: { fileName: any; filePath: string; }) => void; }) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No File Upload' });
    }
    const file = req.files.file;
    file.mv(`${__dirname}/uploads/${file.name}`, (err: any) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});

app.use(express.static(path.join(__dirname, '../public')))

require("./routes/uploadRoutes")(app);
app.listen(port, () => {
    console.log("the server ...on port: ", port);
});
