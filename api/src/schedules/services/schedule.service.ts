import { Schedule } from "../models/schedule.model";
import { ScheduleRepository } from "../repositories/schedule.repository";
import {
    CustomErrors,
    invalidIdError,
    promiseError,
} from "../../utils/error.handler";
import { isIdValid } from "../../utils/id.validator";

export class ScheduleService {
    constructor(private readonly scheduleRepository: ScheduleRepository) { }

    async getAll(): Promise<Schedule[] | CustomErrors> {
        try {
            const schedules = await this.scheduleRepository.getAll();
            return schedules;
        } catch (error) {
            return promiseError(error);
        }
    }

    async getById(id: string): Promise<Schedule | CustomErrors> {
        if (!isIdValid(id)) {
            return invalidIdError(id);
        }

        try {
            const schedule = await this.scheduleRepository.getById(id);
            return schedule;
        } catch (error) {
            return promiseError(error);
        }
    }

    async create(schedule: Schedule): Promise<Schedule | CustomErrors> {
        try {
            const formateedSchedule = { ...schedule };
            const newSchedule = await this.scheduleRepository.create(formateedSchedule);
            return newSchedule;
        } catch (error) {
            return promiseError(error);
        }
    }

}