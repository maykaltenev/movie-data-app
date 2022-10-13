import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

//route imports
//Loads .env file contents into process.env.
dotenv.config();

const app = express();
app.use(express.json());

mongoose
    .connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    .then(() => {
        console.log("we are connected to the database.");
    })
    .catch((error) => {
        console.log("an error occurred while connecting ot the db", error);
    });

app.listen(3000, () => console.log("The webserver is running on port 3000"));
