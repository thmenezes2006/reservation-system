import { fakeScheduleData, updatedSchedule } from "./fake.schedule.data";
import { ScheduleRepository } from "../repositories/schedule.repository";

export const fakeScheduleRepository = {
    getAll: () => Promise.resolve(fakeScheduleData),
    getById: () => Promise.resolve(fakeScheduleData[0]),
    create: () => Promise.resolve(fakeScheduleData[1]),
} as unknown as ScheduleRepository;