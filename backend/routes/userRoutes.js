import express from "express";
import { createUser, deleteUser, getAll, getOne, updateUser } from "../controllers/userController.js";

const route = express.Router();

route.post("/create", createUser);
route.get("/getall", getAll);
route.get("/getone/:id", getOne);
route.put("/update/:id", updateUser);
route.delete("/delete/:id", deleteUser);

export default route;