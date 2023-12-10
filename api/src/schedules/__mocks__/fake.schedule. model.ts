import { Model } from "mongoose"
import { Schedule } from "../models/schedule.model"
import { fakeScheduleData, updatedSchedule } from "./fake.schedule.data"

export const fakeScheduleModel = {
    find: () => Promise.resolve(fakeScheduleData),
    findById: jest.fn().mockImplementation(() => (
        {
            populate: jest.fn().mockImplementation(() => fakeScheduleData[0])
        }
    )),
    create: () => Promise.resolve(fakeScheduleData[0]),
} as unknown as Model<Schedule>;