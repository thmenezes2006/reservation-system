import { UserService } from "../services/user.service"
import { fakeUserData, updatedUser } from "./fake.user.data"

export const fakeUserService = {
    getAll: () => Promise.resolve(fakeUserData),
    getById: () => Promise.resolve(fakeUserData[0]),
    create: () => Promise.resolve(fakeUserData[1]),
    update: () => Promise.resolve(updatedUser),
} as unknown as UserService;