import { Schedule } from "../models/schedule.model";
import { Model } from "mongoose";

export class ScheduleRepository {
    constructor(private readonly scheduleModel: Model<Schedule>) { }

    async getAll(): Promise<Schedule[]> {
        const schedules = await this.scheduleModel.find();

        return schedules;
    }

    async getAllByUser(user: string): Promise<Schedule[]> {
        const schedules = await this.scheduleModel.find({ user: user });

        return schedules;
    }

    async getById(id: string): Promise<Schedule> {
        const schedule = await this.scheduleModel.findById(id);

        if (schedule === null) {
            return {} as Schedule;
        }

        return schedule;
    }

    async create(schedule: Schedule): Promise<Schedule> {
        const newSchedule = this.scheduleModel.create(schedule);
        return newSchedule;
    }

}