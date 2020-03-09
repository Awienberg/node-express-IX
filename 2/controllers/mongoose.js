"use strict";
/*
 * include more sophisticated mongodb functionality
 * mongoose enforces schemas, mongodb doesn't
 */
const mongoose = require("mongoose");

/*
 * create schema for database object
 * build corresponding model as an object
 * Wex19, lesson 14
 */
const continent = mongoose.Schema ({
    continentType: String
});
const continent = mongoose.model("Continent", continent);

const govermentform = mongoose.Schema ({
    govermentformType: String
});
const govermentform = mongoose.model("Govermentform", govermentform);

const country = mongoose.Schema ({
    code: String,
    name: String,
    continent: String,
    region: String,
    surfacearea: Number,
    indepyear: Number,
    population: Number,
    lifeexpectancy: Number,
    gnp: Number,
    gnpold: Number,
    localname: String,
    governmentform: String,
    headofstate: String,
    capital: null,
    code2: String
});
const country = mongoose.model("Country", country);
/*
 * connect to mongodb server
 */
const dbname = "world";
const constr = `mongodb://localhost:27017/${dbname}`;
const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(constr, conparam);
const db = mongoose.connection;
db.once("open", function() {
    console.log("Connected to server by mongoose")
});
/*
 * alternative way of inserting, the C of CRUD
 * create below includes the save functionality
 */
country.create(
    {
        code: "String",
        name: "String",
        continent: "String",
        region: "String",
        surfacearea: Number,
        indepyear: Number,
        population: Number,
        lifeexpectancy: Number,
        gnp: Number,
        gnpold: Number,
        localname: "String",
        governmentform: "String",
        headofstate: "String",
        capital: null,
        code2: "String"
    },
    function(error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);

        db.close();     // if forgotten batch job doesn't stop by itself

    }
);