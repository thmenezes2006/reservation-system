import { ScheduleService } from "../services/schedule.service";
import { ScheduleRepository } from "../repositories/schedule.repository";
import { ScheduleModel } from "../models/schedule.model";
import { ScheduleController } from "../controllers/schedule.controller";

export function scheduleFactory() {
    const schedulesRepository = new ScheduleRepository(ScheduleModel);
    const schedulesService = new ScheduleService(schedulesRepository);
    const schedulesController = new ScheduleController(schedulesService);

    return schedulesController;
}

export const schedule = scheduleFactory();