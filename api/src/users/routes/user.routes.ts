import express from "express";
import { user } from "../factories/user.factory";

const usersRoutes = express.Router();

usersRoutes.get("/", user.getAll.bind(user));
usersRoutes.get("/:id", user.getById.bind(user));
usersRoutes.get("/:field/:value", user.getWhere.bind(user));
usersRoutes.post("/", user.create.bind(user));
usersRoutes.put("/:id", user.update.bind(user));


export default usersRoutes;