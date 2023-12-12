import express from "express";
import { schedule } from "../factories/schedule.factory";

const schedulesRoutes = express.Router();

//o bind é encarregado de manter o escopo do this
schedulesRoutes.get("/", schedule.getAll.bind(schedule));
schedulesRoutes.get("/:id", schedule.getById.bind(schedule));
schedulesRoutes.post("/", schedule.create.bind(schedule));
export default schedulesRoutes;