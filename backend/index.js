import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());


const PORT = process.env.PORT || 4000;
const URL = "mongodb://localhost:27017/mern_crud";

// Api

app.use("/api", userRoutes);

// DB Connection

mongoose.connect(URL)
    .then(() => {
        console.log(`DB Connected Succesfully ....`);

        app.listen(PORT, () => {
            console.log(`Server Running At :: ${PORT}`);
        })
    })
    .catch(error => console.log(error));


