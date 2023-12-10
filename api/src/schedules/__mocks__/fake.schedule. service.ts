import { ScheduleService } from "../services/schedule.service"
import { fakeScheduleData, updatedSchedule } from "./fake.schedule.data"

export const fakeScheduleService = {
    getAll: () => Promise.resolve(fakeScheduleData),
    getById: () => Promise.resolve(fakeScheduleData[0]),
    create: () => Promise.resolve(fakeScheduleData[1]),
} as unknown as ScheduleService;