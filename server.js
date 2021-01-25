const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const colors=require('colors')
const { readdirSync } = require("fs");



// app
const app = express();

// db
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB LOCALNA POŁĄCZONA".green.underline.bold))
    .catch((err) => console.log("DB CONNECTION ERR".red.underline.bold, err));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors());

// route middleware
// app.use('/api', authRoutes)
readdirSync("./routes").map((r) => app.use("/api", require("./routes/" + r)));

// port
const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`SERWER DZIAŁA NA PORCIE: ${port}`.green.bold));
