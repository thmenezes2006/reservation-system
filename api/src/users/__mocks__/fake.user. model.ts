import { Model } from "mongoose"
import { User } from "../models/user.model"
import { fakeUserData, updatedUser } from "./fake.user.data"

export const fakeUserModel = {
    find: () => Promise.resolve(fakeUserData),
    findById: jest.fn().mockImplementation(() => (
        {
            populate: jest.fn().mockImplementation(() => fakeUserData[0])
        }
    )),
    create: () => Promise.resolve(fakeUserData[0]),
    findByIdAndUpdate: () => Promise.resolve(updatedUser)
} as unknown as Model<User>;