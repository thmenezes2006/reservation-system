import { fakeUserData, updatedUser } from "./fake.user.data";
import { UserRepository } from "../repositories/user.repository";

export const fakeUserRepository = {
    getAll: () => Promise.resolve(fakeUserData),
    getById: () => Promise.resolve(fakeUserData[0]),
    create: () => Promise.resolve(fakeUserData[1]),
    update: () => Promise.resolve(updatedUser),
} as unknown as UserRepository;