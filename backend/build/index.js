"use strict";
const express = require("express");
const cors = require("cors");
const exp = require("constants");
const fileUpload = require("express-fileupload");
const { Sequelize } = require('sequelize');
require("dotenv").config;
const app = express();
const port = process.env.PORT || 5000;
//connect to database
const sequelize = new Sequelize('reactFileUpload', 'yazz', 'yazz', {
    host: 'localhost',
    dialect: 'mysql'
});
try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
}
catch (error) {
    console.error('Unable to connect to the database:', error);
}
app.use(cors());
app.use(express.json());
app.use(fileUpload());
//defiene routes
// const uploadRoutes = require("./routes/uploadRoutes")
app.post('/upload', (req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: 'No File Upload' });
    }
    const file = req.files.file;
    file.mv(`${__dirname}/uploads/${file.name}`, (err) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});
// app.use("/uploadRoutes", uploadRoutes)
app.listen(port, () => {
    console.log("the server ...on port: ", port);
});
